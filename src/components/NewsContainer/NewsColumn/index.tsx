import React from "react";

import { ModifiedData } from "..";
import NewsCard from "../NewsCard";

const NewsColumn: React.FunctionComponent<ModifiedData> = ({
  source,
  articles,
}) => {
  return (
    <div className="news-column">
      <h1>{source}</h1>
      {articles.map((art, idx) => (
        <NewsCard key={idx} data={art} />
      ))}
    </div>
  );
};

export default NewsColumn;
