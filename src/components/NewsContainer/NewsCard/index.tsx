import React from "react";
import { INewsApiArticle } from "ts-newsapi/lib/types";

export interface NewsCardProps {
  data: INewsApiArticle;
}

const NewsCard: React.FunctionComponent<NewsCardProps> = ({ data }) => {
  return (
    <div className="news-card">
      <h1 className="card-title">{data.title}</h1>
      <p className="card-body">{data.content}</p>
      <a href={data.url}>See source</a>
    </div>
  );
};

export default NewsCard;
