"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import NavMenu from "./NavMenu";
import Link from "next/link";
import { menuNavigatorItems } from "@/utilities/menuData";
import { usePathname } from "next/navigation";
import { handleDownloadPDF } from "@/utilities/functions";

export default function Nav({}) {
  const { user } = useUser();
  const pathname = usePathname();

  
  return (
    <header className="relative bg-white  ">
      <div className="max-w-screen-xl mx-auto px-5 grid lg:grid-cols-[1fr_1.4fr_1.2fr_1.2fr_1fr] md:grid-cols-5 py-4 gap-x-4">
        <Link href="/admin-panel " className="col-span-1">
          {" "}
          <img src="/traceability-logo-home.svg" alt="Logo" className="" />
        </Link>
        {/* ORDER  Guide / Data Dictionary / Trends Report / Survey / Support */}
        <div className="hidden lg:flex col-start-2 col-end-6  items-center justify-end gap-4 px-3 border-r border-[var(--background-orange)] ">
          {menuNavigatorItems &&
            menuNavigatorItems.map((item, index) =>
              item?.isDownloadable ? (
                <button
                  // download={}
                  key={index}
                  id={item?.id}
                  onClick={() => {
                  

                    if (user?.role === 'Supervisor'){
                      handleDownloadPDF(item?.url)
                    }
                  }}
                  className={`flex items-center justify-center gap-x-2`}
                >
                  <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
                    <img
                      src={item?.icon}
                      alt="icon"
                      key={index}
                      className="w-4"
                    />
                  </div>
                  <span className="text-xs font-bold">{item?.text}</span>
                </button>
              ) :
              (
                <Link
                  key={index}
                  href={item?.url}
                  id={item?.id}
                  prefetch={true}
                  className={`${
                    pathname === item?.url ? "hidden" : ""
                  } flex items-center justify-center gap-x-2`}
                >
                  <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </div>
                  <span className="text-xs font-bold">{item?.text}</span>
                </Link>
              ) 
            )}
      
        </div>

        <nav id="right-navigator" className="flex items-center flex-nowrap justify-end gap-16 col-start-6 ">
          <div className="flex items-center gap-2">
            <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
              <img src="/user-nav-icon.svg" alt="user icon" className="w-4" />
            </div>
            <span id="name-user-navigator" className="opacity-80 font-medium text-sm">
              {user?.name} {user?.lastname}
            </span>
            <NavMenu />
          </div>
        </nav>
      </div>
    
       
    
    </header>
  );
}
