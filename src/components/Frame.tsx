import * as React from "react";
import { useState, useEffect } from "react";
import {
  INewsApiSource,
  INewsApiSourceItem,
  INewsApiSourceParams,
} from "ts-newsapi/lib/types";

import useSearch from "./../hooks/useSearch";

import NewsContainer from "./NewsContainer";
import SearchBar from "./Searchbar";
import SourceSelector from "./SourceSelector";

export interface FrameProps {}

const Frame: React.FunctionComponent<FrameProps> = () => {
  const [search, setSearch] = useState<null | string>(null);
  const [sources, setSources] = useState<string[]>([]);
  const searchResults = useSearch(search, sources);

  return (
    <>
      <main>
        <h1 className="logo">Yournalist</h1>
        <div className="top-search">
          <SearchBar onSearch={(s) => setSearch(s)} />
          <SourceSelector
            onSourcesSelect={(sources: string[]) => {
              setSources(sources);
            }}
          />
        </div>
        <NewsContainer searchResults={searchResults} />
      </main>
    </>
  );
};

export default Frame;
