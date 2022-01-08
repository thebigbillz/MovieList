import React, { createContext, useState, useContext, useEffect } from "react";
import { useMovies } from "./MovieContext";

export const SearchcContext = createContext();

export const useSearchContext = () => {
  return useContext(SearchcContext);
};

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [rawMovies, movies, setMovies] = useMovies();

  const getSearch = () => {
    // setMovies(rawMovies.filter((movie) => movie.title.includes(search)));
    setMovies(
      rawMovies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getSearch();
  }, [search]);
  return (
    <SearchcContext.Provider value={[search, setSearch]}>
      {children}
    </SearchcContext.Provider>
  );
};
