import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { redirect } from "next/navigation";


export default async function Home() {
  // const session = await getSession();
  // console.log("session /", session)
  // if (session) {
  //   return redirect('/admin-panel')
  // }
  return (
    <main id="home-content" className="bg-primary-gradient min-h-screen max-h-screen overflow-hidden  py-20">
      <div className="max-w-screen-xl mx-auto grid lg:flex px-5 lg:p-0">
      <section className=" bg-white p-14 flex flex-col gap-7 lg:w-[35%] items-center lg:items-start">
        <div>
            <img src="/traceability-logo-home.svg" alt="Traceability logo" />
        </div>
        <div id="hero-description" className="">
          <div className=" text-[46px] leading-snug">
            <span className="text-[var(--highlight-pink)]">Hello,</span> <br/>
           <strong className="text-black"> Welcome!</strong>
          </div>
        </div>
        <p className="font-medium text-lg">
        Get updates on global open health regulations, understand digital health strategies to boost healthcare access, drive data-driven decisions, improve efficiency, and promote equity for impactful outcomes and cost savings.
        </p>
        <Link id="login-link" href="/api/auth/login">
        <button className="bg-[var(--highlight-pink)] px-7 text-white font-medium rounded-md shadow py-2">Login / Register</button>
        </Link>
        
      </section>
      <div id="hero-home-img" className="hidden lg:flex items-center justify-center p-10 hero-home-img">
        <img src="/welcome-page.png" alt="Traceability dashboard features image" className=""/>
        
      </div>
      </div>
      <footer id="homepage-footer" className="w-full text-center  mt-10">By <img src="/platformable-logo-black.svg" alt="icon" className="inline"/></footer>
    </main>
  );
}
