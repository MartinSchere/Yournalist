import React, { useRef } from "react";

import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";

export interface SearchBarProps {
  onSearch: (e: string) => void;
}

const SearchBar: React.FunctionComponent<SearchBarProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const _handleSearch = () => {
    if (null !== inputRef.current) {
      inputRef.current.focus();
      props.onSearch(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  const _handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      _handleSearch();
    }
  };

  return (
    <div className="search-wrapper">
      <IconContext.Provider value={{ size: "1.25em" }}>
        <FaSearch onClick={_handleSearch} className="search-icon" />
        <input
          ref={inputRef}
          type="text"
          name="search"
          className="searchbar"
          onKeyDown={_handleKeyDown}
          placeholder="Search news..."
        />
      </IconContext.Provider>
    </div>
  );
};

export default SearchBar;
