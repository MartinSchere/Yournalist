import * as React from "react";
import { useState, useEffect } from "react";

import useSearch from "./../hooks/useSearch";

import NewsContainer from "./NewsContainer";
import SearchBar from "./Searchbar";

export interface FrameProps {}

const Frame: React.FunctionComponent<FrameProps> = () => {
  const [search, setSearch] = useState<null | string>(null);
  const searchResults = useSearch(search, ["bbc-news"]);

  const handleSearch = (s: string) => {
    setSearch(s);
  };

  return (
    <>
      <main>
        <h1 className="logo">Yournalist</h1>
        <SearchBar onSearch={handleSearch} />
        <NewsContainer searchResults={searchResults} />
      </main>
    </>
  );
};

export default Frame;
