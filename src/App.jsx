import { useEffect } from "react";
import { useState } from "react";
import styles from "./App.module.css";
import MovieList from "./components/MovieList";
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
    }, 500);

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
        <MovieList movieList={movieList} />
      )}
    </>
  );
}

export default App;
