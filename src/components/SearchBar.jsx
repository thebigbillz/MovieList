import React from "react";
import { useSearchContext } from "../context/SearchContext";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";

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
      <SearchIcon
        style={{
          color: "whitesmoke",
          borderBottom: "2px solid rgba(255, 25, 25, 0.801)",
          fontSize: "2.3rem",
          paddingBottom: "0.5rem",
        }}
      />
    </div>
  );
};

export default SearchBar;
