import React, { useEffect, useState } from "react";
import { INewsApiSourceParams } from "ts-newsapi/lib/types";

import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";

import useSourceSearch from "../../hooks/useSourceSearch";
import Loader from "./../Loader/index";

import Source from "./Source";
import { preProcessFile } from "typescript";

export interface SourceSelectorProps {
  onSourcesSelect: (source: string[]) => void;
}

const categories: INewsApiSourceParams["category"][] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const SourceSelector: React.FunctionComponent<SourceSelectorProps> = ({
  onSourcesSelect: onSourcesSelect,
}) => {
  const [dropdownShow, setDropdownShow] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    INewsApiSourceParams["category"]
  >();
  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const { loading, error, data } = useSourceSearch(selectedCategory);

  useEffect(() => {
    onSourcesSelect(selectedSources);
    console.log(selectedSources);
  }, [JSON.stringify(selectedSources)]);

  return (
    <div className="source-selector">
      <button
        onClick={() => setDropdownShow(!dropdownShow)}
        className="dropdown-btn"
      >
        Select sources
        {!dropdownShow ? <BsArrowRightShort /> : <BsArrowDownShort />}
      </button>
      <div className={dropdownShow ? "dropdown" : "dropdown hide"}>
        {categories.map((c, idx) => (
          <div
            className="category-badge"
            key={idx}
            onClick={() => {
              setSelectedCategory(c);
              setSelectedSources([]);
            }}
          >
            {c}
          </div>
        ))}
        {loading && <Loader />} {error && <h1>There was an error</h1>}
        {data &&
          data.sources.map((source) => (
            <Source
              key={source.id}
              sourceId={source.id}
              sourceName={source.name}
              onSelect={(sourceId) => {
                setSelectedSources((prev) =>
                  prev.includes(sourceId)
                    ? prev.filter((e) => e !== sourceId)
                    : [...prev, sourceId]
                );
              }}
            />
          ))}
        {!loading && !error && !data && (
          <h4 className="">Select sources to compare</h4>
        )}
      </div>
    </div>
  );
};

export default SourceSelector;
