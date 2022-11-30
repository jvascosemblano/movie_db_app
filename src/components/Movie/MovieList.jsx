import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { getMovies } from "../../services/api";
import movieStyles from "./Movie.module.css";
import Loading from "../Loading/Loading";

const MovieList = ({ query }) => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setLoading(() => true);
      getMovies(query)
        .then((data) => setMovieList(() => data.results))
        .catch((error) => console.log(error))
        .finally(() => setLoading(() => false));
    };

    const delay = setTimeout(() => {
      if (query !== "") {
        fetchData();
      } else {
        setMovieList(() => []);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return loading ? (
    <Loading />
  ) : (
    <div className={movieStyles.movieGrid}>
      {movieList.map((movie, index) => (
        <MovieItem key={`movie${index}`} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
