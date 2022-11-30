import React from "react";
import movieStyles from "./Movie.module.css";

const MovieDetails = ({ movie }) => {
  return (
    <div className={movieStyles.movieInfo}>
      <p>Release Date: {movie.release_date}</p>
      <p>Budget: ${movie.budget}</p>
      <p>Revenue: ${movie.revenue}</p>
      <p>
        Genres:
        {movie.genres.map(
          (genre, index) =>
            ` ${genre.name}${index < movie.genres.length - 1 ? "," : ""}`
        )}
      </p>
      <p>
        Production:
        {movie.production_companies.map(
          (company, index) =>
            ` ${company.name}${
              index < movie.production_companies.length - 1 ? "," : ""
            }`
        )}
      </p>
      <p>Popularity: {movie.popularity} position</p>
    </div>
  );
};

export default MovieDetails;
