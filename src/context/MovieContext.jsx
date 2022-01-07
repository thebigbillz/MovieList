import Axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";

export const MovieContext = createContext();

export const useMovies = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const data = await response.data.results;
    console.log(data);
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
};
