import Image from "next/image";
import NewsItem from "./NewsItem";
import { getNewsFeed } from "@/app/lib/newsFeed";

const News = async ({  }) => {


 const {data, statusText, message} = await getNewsFeed();
 
  if (statusText === "Fail") {
    return (
      <center>Error fetching data</center>
    )
  }
  return (
    <div className="bg-white h-full rounded-md shadow-md p-5 overflow-y">
      <div className="flex gap-x-3 items-center mb-5">
        <Image width={50} height={50} src="/news_icon.svg" alt="News icon" />
        <h2 className="font-bold">News and updates</h2>
      </div>
      <div className="custom-scrollbar mt-8" role="region" aria-label="News and updates">
        {data &&
          data.map((news, index) => (
            <NewsItem key={index}>
              <h3>{news?.title}</h3>
              <p>
                {new Date(news?.PublicationDate).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  timeZone: "America/New_York",
                })}
              </p>
            </NewsItem>
          ))}
        {data?.statusText === 'Fail' && <p className="flex items-center place-content-center">{data?.message}</p>}
      </div>
    </div>
  );
};

export default News;