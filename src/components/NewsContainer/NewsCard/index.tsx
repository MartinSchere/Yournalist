import React from "react";

import { Url } from "url";

interface Data {
  title: string | null;
  body: string | null;
  url: string | null;
}

export interface NewsCardProps {
  data: Data;
}

const NewsCard: React.FunctionComponent<NewsCardProps> = ({ data }) => {
  return (
    <div className="news-card">
      <h1 className="card-title">{data.title}</h1>
      <p className="card-body">{data.body}</p>
      <a href="#">{data.url}</a>
    </div>
  );
};

export default NewsCard;
