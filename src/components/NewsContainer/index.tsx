import * as React from "react";
import NewsCard from "./NewsCard";

import { useSearchState } from "./../../hooks/useSearch";
import Loader from "./../Loader/index";

import { INewsApiArticle, INewsApiResponse } from "ts-newsapi/lib/types";
import NewsColumn from "./NewsColumn";

export interface NewsContainerProps {
  searchResults: useSearchState;
}
export interface ModifiedData {
  source: string;
  articles: INewsApiArticle[];
}

const NewsContainer: React.FunctionComponent<NewsContainerProps> = (props) => {
  const { loading, error, data } = props.searchResults;

  const groupData = (d: INewsApiResponse): ModifiedData[] => {
    const res = Array.from(
      d.articles.reduce((a, { source, ...rest }) => {
        return a.set(source.id, [rest].concat(a.get(source.id) || []));
      }, new Map())
    ).map(([source, articles]) => ({ source, articles }));

    return res;
  };
  return (
    <div className="news-container">
      {loading && <Loader />}
      {data &&
        groupData(data).map((data, index) => (
          <NewsColumn
            key={index}
            articles={data.articles}
            source={data.source}
          />
        ))}
      {error && (
        <div className="error">
          <h1>There was an error.</h1>
          <h5>Please try again later</h5>
        </div>
      )}
      {!data && !error && !loading && (
        <div className="initial">
          <h1>Search something to start comparing news!</h1>
        </div>
      )}
    </div>
  );
};

export default NewsContainer;
