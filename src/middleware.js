import { NextResponse } from "next/server"
import { getSession } from "@auth0/nextjs-auth0/edge" // Note the /edge import
import { compareDates } from "./app/lib/utils"
import * as jose from "jose"

export async function middleware(req) {
  const res = new NextResponse()
  const userSession = await getSession(req, res)
  // const getUserLiveData = await userLiveData(userSession?.user?.email,userSession?.user?.APIToken)
  // console.log("getUserLiveData",getUserLiveData)

  if (!userSession?.user?.sub) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url))
  }

  const getDecodedToken = async (token) => {
    if (!token) {
      return NextResponse.redirect(new URL("/api/auth/logout", req.url))
    }
    const claims = jose.decodeJwt(token?.toString())
    const expirationDate = claims.exp * 1000
    // const dateObject = new Date(expirationDate * 1000);
    // console.log(claims);
    return expirationDate
  }

  const expirationDateDecoded = await getDecodedToken(
    userSession?.user?.APIToken
  )
  const isExpired = compareDates(expirationDateDecoded)

  // auth0 token
  if (isExpired) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url))
  }
}

export const config = {
  /* matcher:'/docs/:path*', */
  matcher: [
    /*  "/docs/:path*",
    "/dashboard/:path*",
    "/data-dictionary",
    "/standards",
     "/support-request",
    "/user-survey", */
    /* "/admin-panel/:path*", */
  ],
}
