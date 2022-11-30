import React from "react";
import { Link } from "react-router-dom";
import movieStyles from "./Movie.module.css";

const MovieItem = ({ movie }) => {
  return (
    <Link className={movieStyles.movieLink} to={`movies/${movie.id}`}>
      <div className={movieStyles.movieItem}>
        <img
          className={movieStyles.movieImage}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.original_title}
        />
        <p>{movie.original_title}</p>
      </div>
    </Link>
  );
};

export default MovieItem;
