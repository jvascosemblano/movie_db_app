import React, { useState, useEffect } from "react";
import { getMovieDetails } from "../../services/api";
import { useParams } from "react-router-dom";
import movieStyles from "./Movie.module.css";
import Loading from "../Loading/Loading";
import MovieDetails from "./MovieDetails";
import MovieProfile from "./MovieProfile";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      getMovieDetails(movieId)
        .then((data) => setMovie(() => data))
        .catch((error) => console.log(error))
        .finally(() => setLoading(() => false));
    };

    fetchData();
  }, [movieId]);

  return loading ? (
    <Loading />
  ) : (
    <div className={movieStyles.movieProfileGrid}>
      <MovieProfile movie={movie} />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MoviePage;
