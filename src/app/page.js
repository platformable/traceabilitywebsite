import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home() {
  const session = await getSession();
  // console.log("session /", session)
  if (session) {
    return redirect('/admin-panel')
  }
  return (
    <main id="home-content" className=" flex justify-center items-center overflow-hidden  pt-20 pb-7">
      <div className="max-w-screen-xl mx-auto grid lg:flex px-5 lg:p-0">
      <section className=" bg-white p-14 flex flex-col gap-7 lg:w-[35%] items-center lg:items-start">
        <div>
            <Image
            src="/traceability-logo-home.svg"
            alt="Traceability logo"
            priority="high"
            width={303}
            height={66}
            />
        </div>
        <div id="hero-description" className="">
          <h1 className="leading-snug ">
            <span className="text-3xl text-[var(--highlight-pink)]">Understanding </span> <br/>
           <strong className="text-4xl text-black"> the Traceability ecosystem</strong>
          </h1>
        </div>
        <p className="font-medium text-regular">
        Learn more about the regulatory environment, standards adoption, digital public infrastructure, and stakeholders involved in sustainability and supply chain traceability. Our datasets focus primarily on origin traceability, that is, data and digital systems that involve data collected at the point of origin for commodities for supply chain traceability and regulatory reporting. We are expanding to track the ecosystem globally, but are currently prioritising European regulations.
        </p>
        <Link id="login-link" href="/api/auth/login">
        <button className="bg-[var(--highlight-pink)] px-7 text-white font-medium rounded-md shadow py-2">Login / Register</button>
        </Link>
        
      </section>
      <div id="hero-home-img" className="hidden lg:flex items-center justify-center p-10 hero-home-img">
        <Image src="/welcome-image.png" alt="Traceability dashboard features image" priority="high" 
        width={750} height={443}
        className=""/>
        
      </div>
      </div>
    </main>
  );
}
