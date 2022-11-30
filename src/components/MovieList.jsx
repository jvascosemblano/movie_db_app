import React from "react";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

const MovieList = ({ movieList }) => {
  return (
    <div className={styles.movieGrid}>
      {movieList.map((movie, index) => (
        <Link
          className={styles.movieLink}
          to={`movies/${movie.id}`}
          key={index}
        >
          <div className={styles.movieItem}>
            <img
              className={styles.movieImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={index}
            />
            <p>{movie.original_title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
