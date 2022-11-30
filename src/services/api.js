const API_BASE_URL = "https://api.themoviedb.org/3/";

export async function getMovies(searchQuery) {
  const response = await fetch(
    `${API_BASE_URL}/search/movie?api_key=${process.env.REACT_APP_API_KEY}${
      searchQuery ? `&query=${encodeURI(searchQuery)}` : ""
    }`
  );
  return response;
}

export async function getMovieDetails(movieId) {
  const response = await fetch(
    `${API_BASE_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response;
}
