import * as React from "react";
import NewsCard from "./NewsCard";

import { useSearchState } from "./../../hooks/useSearch";
import Loader from "./../Loader/index";

export interface NewsContainerProps {
  searchResults: useSearchState;
}

const NewsContainer: React.FunctionComponent<NewsContainerProps> = (props) => {
  const { loading, error, data } = props.searchResults;
  return (
    <div className="news-container">
      {loading && <Loader />}
      {/* {data &&
        data!.articles.map((val, index) => (
          <NewsCard
            key={index}
            data={{ title: val.title, body: val.content, url: val.url }}
          />
        ))} */}
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
