
export default async function DataDictionaryMetadata({contentId, clientToken}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL}/data-dictionary/metadata/${contentId}`, {
    headers: {
      Authorization: `Bearer ${clientToken}`
    }
  })

  const metadata = await res.json()
  const {data} = metadata

  return (
    <section id="DataDictionaryMetadata">
      <div id="regulationDescription" className="bg-white rounded-md my-3  p-5">
        <div className="flex gap-x-2 items-center mb-5">
          <img src="/data-dictionary/Metadata_icon.svg" alt="" />
          <h5 className="text-xs font-bold">Metadata</h5>
        </div>
        <div
          className="dataDictionaryDescription"
          id="dataDictionaryDescription"
        >
          <div className="grid grid-cols-[2fr_10fr] gap-x-5 bg-[var(--background-row-table-datadict)] py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Source</p>
            <p className="text-xs">{data?.DatatableSource}</p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5  py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">How to use</p>
            <p className="text-xs">
            {data?.DatatableUsage}
            </p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5 bg-[var(--background-row-table-datadict)] py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Methodology</p>
            <p className="text-xs">{data?.DatatableMethod}</p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5  py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Methodology limitations</p>
            <p className="text-xs">
              {data?.DatatableLimitations}
            </p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5 bg-[var(--background-row-table-datadict)] py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Equity considerations</p>
            <p className="text-xs">{data?.DatatableEquity}</p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5  py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Update frequency</p>
            <p className="text-xs">
            {data?.DatatableFrequpdate}
            </p>
          </div>
          <div className="grid grid-cols-[2fr_10fr] gap-x-5 bg-[var(--background-row-table-datadict)] py-3 px-5">
            <p className="text-xs font-bold text-[var(--font-title-color)]">Last updated</p>
            <p className="text-xs">{data?.DatatableLastupdated ? new Date(data?.DatatableLastupdated).toLocaleDateString('en-US', {
              day: 'numeric', month: 'short', year: 'numeric'
            }) : '' }</p>
          </div>
        </div>
      </div>
    </section>
  );
}
