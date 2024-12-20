import { getDataFields } from "@/app/lib/data-dictionary/dataFields";

export default async function DataDictionaryTable({contentId}) {

  const {data, statusText} = await getDataFields(contentId)

 
  return (
    <section id="DataDictionaryTable">
      <div id="regulationDescription" className="bg-white rounded-md my-3  p-5">
        <div className="flex gap-x-2 items-center mb-5">
          <img src="/Data_table_items_icon.svg" alt="Data fields icon" />
          <h5 className="text-xs font-bold">Data Fields</h5>
        </div>
        <div
          className="dataDictionaryDescription"
          id="dataDictionaryDescription"
        >
          <div className="grid grid-cols-[2fr_7fr_1.5fr_1.5fr] gap-x-5 py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Data field</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Description</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Data type</p>
            <p className="text-xs font-bold text-[var(--font-title-color)]">Risk score</p>
          </div>

          {data
            ? data?.map((regulation, index) => {
                const { DataField,DataFieldDescription,DatafieldType,RiskScore } =
                  regulation;
                return (
                  <div
                    className={`grid grid-cols-[2fr_7fr_1.5fr_1.5fr] gap-x-5 ${
                      index % 2 === 0 ? "bg-[var(--background-row-table-datadict)]" : ""
                    } py-3 px-5`}
                    key={index}
                  >
                    <p className="text-xs font-bold">
                      {DataField}
                    </p>
                    <p className="text-xs">{DataFieldDescription}</p>
                    <p className="text-xs">{DatafieldType}</p>
                    <p className="text-xs">{RiskScore}</p>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
}
