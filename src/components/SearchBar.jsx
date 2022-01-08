import React from "react";
import { useSearchContext } from "../context/SearchContext";
import "./SearchBar.scss";

const SearchBar = () => {
  const { search, setSearch } = useSearchContext();
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="...search movies"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
