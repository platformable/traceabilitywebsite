import DataDictionaryDescription from "@/components/data-dictionary/DataDictionaryDescription";
import DataDictionaryMetadata from "@/components/data-dictionary/DataDictionaryMetadata";
import DataDictionaryTable from "@/components/data-dictionary/DataDictionaryTable";
import DataDictionaryTaxonomy from "@/components/data-dictionary/DataDictionaryTaxonomy";
import { Suspense } from "react";


export default async function DataDictionaryRightContent({searchParams}) {

  let contentId = searchParams?.contentId 
  

  return (
    <>
    <Suspense fallback={<center className="text-xs">Loading...</center>}> 
      <DataDictionaryDescription contentId={contentId} />
    </Suspense>
    <Suspense fallback={<center className="text-xs">Loading...</center>}> 
      <DataDictionaryMetadata contentId={contentId} />
    </Suspense>
    <Suspense fallback={<center className="text-xs">Loading...</center>}> 
      <DataDictionaryTable contentId={contentId} />
    </Suspense>
    <Suspense fallback={<center className="text-xs">Loading...</center>}> 
      <DataDictionaryTaxonomy contentId={contentId} />
    </Suspense>
    </>
  );
}
