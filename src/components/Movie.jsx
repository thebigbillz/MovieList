import React from "react";
import "./Movie.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Movie = ({ movie }) => {
  const imageURL = "https://www.themoviedb.org/t/p/w500";
  const urlLink = `https://www.themoviedb.org/movie/${movie.id}`;
  return (
    <div
      className="movie-container"
      style={{
        margin: ".6rem",
      }}
    >
      <img
        style={{
          maxWidth: "25rem",
          height: "auto",
        }}
        src={`${imageURL}${movie.poster_path}`}
        alt="movie poster"
      />
      <div className="movie-overlay">
        <div>
          <h1
            style={{
              justifySelf: "start",
              paddingBottom: "1rem",
            }}
          >
            {movie.title}
          </h1>
          <p
            style={{
              justifySelf: "start",

              fontSize: "1.2rem",
            }}
          >
            {movie.overview.length > 300
              ? `${movie.overview.substring(0, 300)}...`
              : movie.overview}
          </p>
        </div>

        <Box sx={{ position: "relative", display: "block" }}>
          <CircularProgress
            variant="determinate"
            value={movie.vote_average * 10}
            sx={{
              color: "rgba(255, 25, 25, 0.801)",
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
              }}
              variant="caption"
              component="div"
            >
              {movie.vote_average}
            </Typography>
          </Box>
        </Box>
        <div>
          <p
            style={{
              marginBottom: "3rem",
              fontSize: "1.2rem",
            }}
          >
            {movie.release_date}
          </p>
          <a
            style={{
              justifySelf: "end",
              padding: "1rem 3rem",
              fontSize: "1.2rem",
              color: "rgba(255, 25, 25, 0.801)",
              backgroundColor: "rgba(255, 255, 255, 0.881)",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            target="_blank"
            href={urlLink}
          >
            More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default Movie;
