import { getMetadata } from "@/app/lib/data-dictionary/metadata";
import Link from "next/link";
import React from "react";

export default async function DataDictionaryDescription({contentId}) {
  const {data, statusText} = await getMetadata(contentId)
  return (
    <section id="indices" className="">
      <div className="flex justify-between items-center border-b border-black py-3">
        <nav className="">
          <ul className="flex gap-x-2 items-center flex-wrap">
            <li>
              <Link href="#indices">
                <p className="text-xs font-bold">{contentId} |</p>
              </Link>
            </li>
            <li>
              <Link href="#DataDictionaryMetadata">
                <p className="text-xs font-bold">Metadata |</p>
              </Link>
            </li>
            <li>
              <Link href="#DataDictionaryTable">
                <p className="text-xs font-bold">Data Table items |</p>
              </Link>
            </li>
            <li>
              <Link href="#DataDictionaryTaxonomy" className="">
                <p className="text-xs font-bold">Taxonomy </p>
              </Link>
            </li>
          </ul>
        </nav>

        {/* <button className="flex items-center gap-2 py-1 px-3 border border-[var(--button-dwnld-border)] bg-[var(--button-dwnld-bg)] rounded text-xs">
        <img src="/download-icon.svg" alt="" />
          Download PDF
        </button> */}
      </div>
      <div
        id="regulationDescription"
        className="bg-white rounded-md my-3 grid grid-cols-[1fr_20fr] gap-x-7 p-5 items-start"
      >
        <div id="regulationIcon" className="flex justify-center ">
          <img
            src="/Regulatory_Complexity_Indices_icon.svg"
            // src={data && JSON.parse(data?.DatatableIcon)[0]?.url}
            alt="Data table icon"
            // width={95}
          />
        </div>

        <div
          className="dataDictionaryDescription"
          id="dataDictionaryDescription"
        >
          <div className="grid lg:grid-cols-[1fr_10fr] gap-x-5 bg-[var(--background-row-table-datadict)] py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Data table</p>
            <p className="text-xs">{contentId} </p>
          </div>
          <div className="grid lg:grid-cols-[1fr_10fr] gap-x-5  py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Description</p>
            <p className="text-xs">
              {data?.DatatableDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
