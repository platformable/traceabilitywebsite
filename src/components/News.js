import { getNewsFeed } from "@/app/lib/newsFeed";

export default async function News() {
  // const { user } = await getSession();

 const {data, statusText, message} = await getNewsFeed();
 
  if (statusText === "Fail") {
    return (
      <center>Error fetching data</center>
    )
  }
 
  return (
    <div className="bg-white h-full rounded-md shadow-md p-5 overflow-y ">
      <div className="flex gap-x-3 items-center mb-5">
        <img src="/news_icon.svg" alt="" />
        <p className="font-bold">News and updates</p>
      </div>
      <div className="custom-scrollbar mt-8">
        {data &&
          data?.map((news, index) => {
            return (
              <div
                className="flex place-content-between gap-7 items-center bg-news-scroll-row p-5 mb-1"
                key={index}
              >
                <p>{news?.title}</p>
                <p>
                  {new Date(news?.PublicationDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "numeric",
                    year: "numeric",
                    timezone: "America/New_York",
                  })}
                </p>
              </div>
            );
          })}
          {data?.statusText === 'Fail' && <p className="flex items-center place-content-center">{data?.message}</p>}
      </div>
    </div>
  );
}
