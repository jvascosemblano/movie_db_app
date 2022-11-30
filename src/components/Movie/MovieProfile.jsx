import React from "react";
import movieStyles from "./Movie.module.css";

const MovieProfile = ({ movie }) => {
  return (
    <div className={movieStyles.movieVignette}>
      <div className={movieStyles.movieProfile}>
        <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
          <img
            className={movieStyles.backdropImage}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
        </a>
        <span className={movieStyles.movieName}>{movie.original_title}</span>
      </div>

      <div className={movieStyles.movieDescription}>{movie.overview}</div>
    </div>
  );
};

export default MovieProfile;
