import DataDictionaryNav from "@/components/data-dictionary/DataDictionaryNav";
import DataDictionaryRightContent from "@/components/data-dictionary/DataDictionaryRightContent";
import { getSession } from "@auth0/nextjs-auth0";

const DataDictionaryMainPage = async ({ searchParams }) => {
  const { user } = await getSession()  
  const clientToken = user?.APIToken
    return (
      <main className="relative max-w-screen-xl mx-auto pt-3 pb-24 ">
        <div className="grid lg:grid-cols-[3fr_10fr] md:grid-cols-1 gap-x-3 ga-y-3">
            <div className="bg-white rounded-md" id="DD-Nav">
                <DataDictionaryNav clientToken={clientToken}/>

            </div>

            <div className="rounded-md p-5 pb-0" id="DD-RightContent">

                <DataDictionaryRightContent searchParams={searchParams} clientToken={clientToken}/>
             

            </div>

        </div>
      </main>
    );
  }



export default DataDictionaryMainPage;
