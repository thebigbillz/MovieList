import React from "react";
import Movie from "../components/Movie";
import { useMovies } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useMovies();

  return (
    <div
      style={{
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "1rem 1rem",
      }}
    >
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie}>
          {" "}
        </Movie>
      ))}
    </div>
  );
};

export default MovieList;
