"use client";

import Link from "next/link";
import { useState } from "react";
import { handleDownloadPDF } from "@/utilities/functions";
import { menuNavigatorItems } from "@/utilities/menuData";
import { useUser } from '@auth0/nextjs-auth0/client';
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [showMenu, setShowmenu] = useState(false);
  const { user, error, isLoading } = useUser();
  // const cookies = useCookies()
  const pathname = usePathname();

  return (
    <div  className="relative inline-block text-left">
      <button
        onClick={() => setShowmenu((prev) => !prev)}
        className="px-3 py-1 text-sm font-semibold   hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        <img src="/down-arrow.svg" alt="options icon" className="w-6" />
      </button>

      {showMenu && (
        <div id="right-menu" className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="none">
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {/* <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" x="-1" id="menu-item-0">Account settings</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</a>
                  <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</a> */}
            
{/* 
            <Link href="https://accelerator.platformable.com">
              <p className="block w-full px-4 py-2 text-left text-sm hover:bg-[var(--button-background-forms)] hover:font-bold">
                Dashboard Main 
              </p>
            </Link> */}
            {/* {
              user.role==='User' &&   <ManageBilling id="managebilling-link" customerId={user?.userStripeId} >
              <p className="block w-full px-4 py-2 text-left text-sm hover:bg-[var(--button-background-forms)] hover:font-bold">
                
                Manage Billing <br/> (Customer portal)
              </p>

            </ManageBilling>
            } */}
            {
              user?.role==='User' &&   <Link id="account-link" href="/user/settings">
              <p className="block w-full px-4 py-2 text-left text-sm hover:bg-[var(--button-background-forms)] hover:font-bold">
                Account 
              </p>
            </Link>
            }
            {/* {user?.role === "Supervisor" ? (
              <Link  href="https://development--platformabledashboard.netlify.app/">
              <p className="block w-full px-4 py-2 text-left text-sm hover:bg-[var(--button-background-forms)] hover:font-bold">
                Dashboard Dev 
              </p>
            </Link>
            ) : (
              ""
            )} */}
           

            <div className="lg:hidden">
            {menuNavigatorItems &&
            menuNavigatorItems.map((item, index) =>
              item?.isDownloadable ? (
                <button
                  // download={}
                  key={index}
                  id={item?.id}
                  onClick={() => {
                      handleDownloadPDF(item?.url)
                  }}
                  className={`flex items-center gap-x-2 px-4  py-2 text-left text-sm`}
                >
                  {/* <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-4"
                    />
                  </div> */}
                  <span className="">{item?.text}</span>
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
                  } flex items-center gap-x-2 px-4  py-2 text-left text-sm`}
                >
                  {/* <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
                    <img
                      src={item?.icon}
                      alt="icon"
                      className="w-4 h-4"
                    />
                  </div> */}
                  <span className="">{item?.text}</span>
                </Link>
              ) 
            )}
            </div>

            <a href="/api/auth/logout">
              <button className=" block w-full px-4 py-2 text-left  text-sm hover:bg-[var(--button-background-forms)] hover:font-bold">
                Sign out
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
