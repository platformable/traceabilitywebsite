import DataDictionaryNavContent from "./DataDictionaryNavContent";

export default async function DataDictionaryNav({ clientToken }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL}/data-dictionary/`, {
    headers: {
      Authorization: `Bearer ${clientToken}`
    }
  })
  const indexes = await res.json()
  
  return (
    <>
      <div className="p-5">
        <div className=" flex items-center justify-start gap-2 pb-2 border-b border-black ">
          <div className="w-[33.5px] h-[33.5px] circular-gradient rounded-full flex items-center justify-center">
            <img
              src="/data-dictionary-icon.svg"
              alt="data dictionaty icon"
              className="w-3"
            />
          </div>
          <h4 className="font-bold text-[14px]">Data Dictionary</h4>
        </div>
      </div>
      <div className="mt-2 mb-5">
        <DataDictionaryNavContent indexes={indexes.data}/>
      </div>
    </>
  );
}
