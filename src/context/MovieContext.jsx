import Axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";

export const MovieContext = createContext();

export const useMovies = () => {
  return useContext(MovieContext);
};

export const MovieProvider = ({ children }) => {
  const [rawMovies, setRawMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    const data = await response.data.results;

    setRawMovies(data);
    setMovies(data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <MovieContext.Provider value={{ rawMovies, movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
