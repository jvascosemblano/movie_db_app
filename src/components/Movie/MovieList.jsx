import React, { useEffect, useRef, useState } from "react";
import MovieItem from "./MovieItem";
import { getMovies } from "../../services/api";
import movieStyles from "./Movie.module.css";
import Loading from "../Loading/Loading";

const MovieList = ({ query }) => {
  const MIN_PAGE = 1;
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(MIN_PAGE);
  const [maxPage, setMaxPage] = useState(MIN_PAGE);
  let lastQuery = useRef(query);

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    const fetchData = () => {
      if (lastQuery.current !== query) {
        setPage(() => MIN_PAGE);
      }
      setLoading(() => true);
      getMovies(query, page, signal)
        .then((data) => {
          setMovieList(() => data.results);
          setMaxPage(() => data.total_pages);
          lastQuery.current = query;
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(() => false));
    };

    const delay = setTimeout(() => {
      if (query !== "") {
        fetchData();
      } else {
        setMovieList(() => []);
      }
    }, 100);

    return () => {
      clearTimeout(delay);
      controller.abort();
    };
  }, [query, page]);

  function handlePageChange(previousOrNext) {
    switch (previousOrNext) {
      case "previous":
        setPage((prevPage) => prevPage - 1);
        break;
      case "next":
        setPage((prevPage) => prevPage + 1);
        break;
      default:
        break;
    }
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      {!!movieList.length && (
        <div className={movieStyles.pageSelectors}>
          {page > MIN_PAGE && (
            <div
              className={movieStyles.pageArrow}
              onClick={() => handlePageChange("previous")}
            >
              ← Previous Page
            </div>
          )}
          {page < maxPage && (
            <div
              className={movieStyles.pageArrow}
              onClick={() => handlePageChange("next")}
            >
              Next Page →
            </div>
          )}
        </div>
      )}
      <div className={movieStyles.movieGrid}>
        {movieList.map((movie, index) => (
          <MovieItem key={`movie${index}`} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default MovieList;
