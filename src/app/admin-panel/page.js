import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { Suspense } from "react";

import Loader from "@/components/Loader";
import Disclaimer from "@/components/Disclaimer";
import News from "@/components/News";


export default async function AdminPanel() {
  // const { user } = await getSession();
 
  // console.log("user server", user);
  return (
    <>
    <section id="dashboard-content" className="bg-primary-gradient min-h-screen pb-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-2 max-w-screen-xl mx-auto lg:px-0 px-5">
          <div className="pt-20 mb-10 flex flex-col justify-center lg:justify-start gap-7 w-full  ">
            <div className="">
              <div className="text-[var(--home-highlight)] text-[46px] leading-tight">
                <span className="opacity-80">Hello,</span><br/>
                <span className="font-bold"> {/* {user?.name} */}</span>
              </div>
              <span className="font-bold text-3xl">
                What do want to do today?
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-2">
            <Link href="/dashboard" prefetch={true}>
              <button className="bg-white w-full flex flex-col items-center  h-56 gap-y-4 rounded-md font-bold shadow px-6 py-5 lg:p-8 ">
                <div className="circular-gradient  transition rounded-full p-6 aspect-square">
                  <Image
                    src="/regulation-dashboard-icon.svg"
                    alt="dashboard icon"
                    width={50}
                    height={50}
                  />
                </div>
                Traceability  <br />
                Ecosystem
              </button>
            </Link>
            <Link href="/dashboard/country" prefetch={true}>
              <button className="bg-white w-full flex flex-col items-center  h-56 gap-y-4 rounded-md font-bold shadow px-6 py-5 lg:p-8">
                <div className="circular-gradient  transition rounded-full p-6 aspect-square">
                  <Image
                    src="/open-ecosystem-icon.svg"
                    alt="dashboard icon"
                    width={50}
                    height={50}
                  />
                </div>
                What is an <br />
                Open Ecosystem? 
              </button>
            </Link>
        
            {/* <Link href="/standards" prefetch={true}>
              <button className="bg-white w-full flex flex-col items-center  h-56 gap-y-4 rounded-md font-bold shadow px-6 py-5 lg:p-8">
                <div className="circular-gradient  transition rounded-full p-6 ">
                  <Image
                    src="/standards-icon.svg"
                    alt="standards icon"
                    className="aspect-square"
                    width={50}
                    height={50}
                  />
                </div>
                Standards
              </button>
            </Link> */}
    {/*         {user?.role === "Supervisor" ? (
              <Link href="admin-panel/users">
                <button className="bg-white w-full flex flex-col items-center  h-56 gap-y-4 rounded-md font-bold shadow px-6 py-5 lg:p-8">
                  <div className="circular-gradient transition rounded-full p-6 aspect-square">
                    <Image
                      src="/manage-users-icon.svg"
                      alt="user management icon"
                      width={50}
                      height={50}
                      />
                  </div>
                  Manage <br />
                  Users
                </button>
              </Link>
            ) : (
              ""
            )} */}
            </div>
          </div>
          <div className="lg:pt-20 pt-0 mb-10">
            <Suspense fallback={<Loader />}>
              <News />
            </Suspense>
          </div>
        </div>
   
        <Disclaimer />

    </section>
    
    </>
   
  );
}
