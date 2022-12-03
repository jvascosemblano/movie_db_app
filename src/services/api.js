const API_BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY_QUERY = `api_key=${process.env.REACT_APP_API_KEY}`;

export async function getMovies(searchQuery, page, signal) {
  const response = await fetch(
    `${API_BASE_URL}/search/movie?${API_KEY_QUERY}${
      searchQuery ? `&query=${encodeURI(searchQuery)}` : ""
    }&page=${page}`,
    { signal }
  );
  const data = await response.json();
  return data;
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${API_BASE_URL}/movie/${movieId}$}?${API_KEY_QUERY}`
  );
  const data = await response.json();
  return data;
}
