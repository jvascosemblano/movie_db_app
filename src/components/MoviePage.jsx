import React from "react";
import { useEffect } from "react";
import { getMovieDetails } from "../services/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styles from "../App.module.css";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovieDetails(movieId);
      const data = await response.json();
      return data;
    };

    fetchData().then((data) => setMovie(() => data));
  }, [movieId]);

  return (
    movie && (
      <div className={styles.movieProfileGrid}>
        <div className={styles.movieProfile}>
          <a href={`https://www.imdb.com/title/${movie.imdb_id}`}>
            <img
              className={styles.backdropImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
          </a>
          <span className={styles.movieName}>{movie.original_title}</span>
        </div>
        <div className={styles.movieInfo}>
          <p>Release Date: {movie.release_date}</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
          <p>
            Genres:
            {movie.genres.map((genre, index) => {
              return ` ${genre.name}${
                index < movie.genres.length - 1 ? "," : ""
              }`;
            })}
          </p>
          <p>
            Production:
            {movie.production_companies.map((company, index) => {
              return ` ${company.name}${
                index < movie.production_companies.length - 1 ? "," : ""
              }`;
            })}
          </p>
          <p>Popularity: {movie.popularity} position</p>
        </div>
        <div className={styles.movieDescription}>{movie.overview}</div>
      </div>
    )
  );
};

export default MoviePage;
