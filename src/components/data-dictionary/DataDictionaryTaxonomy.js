import { getTaxonomies } from "@/app/lib/data-dictionary/taxonomies";

export default async function DataDictionaryTaxonomy({contentId}) {

  const {data, statusText} = await getTaxonomies(contentId)
 
  return (
    <section id="DataDictionaryTaxonomy">
    <div id="regulationDescription" className="bg-white rounded-md mt-3  p-5">
      <div className="flex gap-x-2 items-center mb-5">
        <img src="/Taxonomy_icon.svg" alt="Data dictionary taxonomies icon" />
        <h5 className="text-xs font-bold">Taxonomy</h5>
      </div>
      <div
        className="dataDictionaryDescription"
        id="dataDictionaryDescription"
      >
        <div className="grid grid-cols-[1.5fr_2.5fr_7fr_1fr] gap-x-5 py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Subcategory</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Category</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Description</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Data type</p>
        </div>

        {data
            ? data?.map((taxonomy, index) => {
                const { TaxonomyCategory, TaxonomySubcategory, TaxonomyDescription, DatafieldType } =
                taxonomy;
                return (
                  <div
                    className={`grid grid-cols-[1.5fr_2.5fr_7fr_1fr] gap-x-5 ${
                      index % 2 === 0 ? "bg-[var(--background-row-table-datadict)]" : ""
                    } py-3 px-5`}
                    key={index}
                    >
                    <p className="text-xs font-bold">
                      {TaxonomySubcategory}
                    </p>
                    <p className="text-xs">{TaxonomyCategory}</p>
                    <p className="text-xs">{TaxonomyDescription}</p>
                    <p className="text-xs">{DatafieldType}</p>
                  </div>
                );
              })
            : ""}
{/*         <div className="grid grid-cols-[2.5fr_1.5fr_7fr_1fr] gap-x-5 bg-[#EDF2FF] py-3 px-5">
          <p className="text-xs">Regulatory Complexity Indices</p>
          <p className="text-xs">Very Low</p>
          <p className="text-xs">Regulatory complexity is consdered very low as there are between 0 and 4 characteristics defined in regulations</p>
          <p className="text-xs">String</p>
        </div> */}
  
      </div>
    </div>
  </section>
  )
}
