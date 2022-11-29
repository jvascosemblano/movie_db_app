import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./App.module.css";
import { getMovies } from "./services/api";

function App() {
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMovies(query);
      const data = await response.json();
      return data;
    };

    const delay = setTimeout(() => {
      if (query !== "") {
        fetchData().then((data) => setMovieList(() => data.results));
      }
    }, 1000);

    return () => clearTimeout(delay);
  }, [query]);

  const handleChange = (e) => {
    setQuery(() => e.target.value);
    if (e.target.value === "") {
      setMovieList(() => []);
    }
  };

  return (
    <>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Search movie"
        onChange={handleChange}
      />

      {movieList.length <= 0 ? (
        <div className={styles.loading}>
          Search and movies will show up here
        </div>
      ) : (
        <div className={styles.movieGrid}>
          {movieList.map((movie, index) => (
            <Link to={`movies/${movie.id}`}>
              <div className={styles.movieItem}>
                <img
                  className={styles.movieImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={index}
                  width="200px"
                />
                <p>{movie.original_title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
