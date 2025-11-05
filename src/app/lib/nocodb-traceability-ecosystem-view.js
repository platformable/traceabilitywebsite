"use server"
import { Api } from "nocodb-sdk"

export async function getEcosystemVisualizationData() {
  //  console.log("executing getEcosystemTraceabilityView")
  const api = new Api({
    baseURL: process.env.NEXT_PUBLIC_NOCODB_API_URL,
    headers: {
      "xc-auth": process.env.NEXT_PUBLIC_NOCODB_AUTH_TOKEN,
    },
  })
  try {
    const data = await api.dbViewRow.list(
      "noco",
      "[DASHBOARD] - Open traceablity",
      "EcosystemView",
      "EcosystemView",
      {
        offset: 0,
        limit: 25,
        where: "",
      }
    )

    return { data: data?.list, errors: {} }
  } catch (error) {
    console.error(error)
  }
}

export async function getEcosystemVisualizationTotals() {
  //

  try {
    const getData = await fetch(
      `${process.env.DEV_BACKEND_API_URL}/ecosystem/totals`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }
    )
    const data = await getData.json()
    console.log("getEcosystemVisualizationTotals", data)
    return { data: data[0], errors: {} }
  } catch (error) {
    console.error(error)
  }
}
