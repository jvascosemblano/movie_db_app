import { useState } from "react";
import MovieList from "./components/Movie/MovieList";
import MovieSearchInfo from "./components/Search/MovieSearchInfo";
import SearchMovieBar from "./components/Search/SearchMovieBar";

function App() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(() => e.target.value);
  };

  return (
    <>
      <SearchMovieBar handleChange={handleChange} />
      {query === "" ? <MovieSearchInfo /> : <MovieList query={query} />}
    </>
  );
}

export default App;
