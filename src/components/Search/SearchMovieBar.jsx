import React from "react";
import searchStyles from "./Search.module.css";

const SearchMovieBar = ({ handleChange }) => {
  return (
    <input
      className={searchStyles.searchBar}
      type="search"
      placeholder="Search movie"
      onChange={handleChange}
    />
  );
};

export default SearchMovieBar;
