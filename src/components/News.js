import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News({ pageSize, country, category, title }) {
  const [newsList, setNewsList] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [page, setPage] = useState(1);

  document.title = `${title} - NewsBytes`;

  async function updateData() {
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=6237571e261b4f0a9b7a910d1223fe4a&page=${page}&pageSize=${pageSize}`
    );
    let res = await data.json();
    setTotalArticles(res.totalResults);
    setNewsList(res.articles);
  }

  useEffect(() => {
    updateData();
  }, [page, category, country, pageSize]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=1592c5d1cebc450fbf077f986dbc51f9&page=${page}&pageSize=${pageSize}`
    );
    let res = await data.json();
    // console.log(res);
    setTotalArticles(res.totalResults);
    setNewsList(newsList.concat(res.articles));
  };

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{ marginTop: "90px" }}>
        News Bytes - {title}
      </h1>
        <InfiniteScroll
          dataLength={newsList.length}
          next={fetchMoreData}
          hasMore={newsList.length !== totalArticles}
        >
        <div className="container">
      <div className="row">
          {newsList.map((news) => (
            <div key={news.url} className="col md-4">
              <NewsItems
                title={news.title ? news.title.slice(0, 45) : ""}
                description={
                  news.description ? news.description.slice(0, 88) : ""
                }
                imageUrl={
                  !news.urlToImage
                    ? "https://img.etimg.com/thumb/msid-94624462,width-1070,height-580,imgsize-11194,overlay-ettech/photo.jpg"
                    : news.urlToImage
                }
                newsUrl={news.url}
                author={news.author}
                date={news.publishedAt}
              />
            </div>
          ))}
      </div>
      </div>
        </InfiniteScroll>
     
    </div>
  );
}
