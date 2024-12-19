"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function DataDictionaryNavContent({ indexes }) {
  const router = useRouter();
  const searchParams = useSearchParams()
  const contentIdSelected = searchParams.get('contentId')

  const setParams = (id) => {
    router.replace(`?contentId=${id}`, { scroll: false, shallow: true });
  };

  useEffect(() => {
    if (!contentIdSelected) {
      //Select first content of the menu when page finish loading
      setParams(indexes[0]?.DatatableName)
    }
  }, [])
  
  return (
    <>
      {indexes?.map((item, index) => {
        return (
          <button
            onClick={() => setParams(item.DatatableName)}
            className={`${contentIdSelected === item.DatatableName ? 'bg-[#E1DBFF] ' : '' } hover:bg-[#E1DBFF] w-full px-5 py-3 flex items-center gap-2 justify-start cursor-pointer`}
            key={index}
          >
            <img src="/item_menu_dictionary_icon.svg" alt="menu item icon" />
            <span className="text-[14px] text-left">
              {item.DatatableName}
              </span>
            <img
              src="/arrow_right_dictionary_menu.svg"
              alt="arrow icon"
              className="ml-auto"
            />
          </button>
        );
      })}
    </>
  );
}
