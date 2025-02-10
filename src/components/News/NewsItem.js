

const NewsItem = ({ children , key }) => {
    return (
        <div
        className="flex place-content-between gap-7 items-center bg-news-scroll-row p-5 mb-1"
        key={key}
      >
        {children}
      </div>
    );
};

export default NewsItem;