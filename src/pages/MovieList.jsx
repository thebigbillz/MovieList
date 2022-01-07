import React from "react";
import Movie from "../components/Movie";
import { useMovies } from "../context/MovieContext";

const MovieList = () => {
  const imageURL = "https://www.themoviedb.org/t/p/w500";
  const movies = useMovies();

  console.log(movies?.[3]);
  return (
    <div>
      <h1>MovieList</h1>
      <Movie />
    </div>
  );
};

export default MovieList;
