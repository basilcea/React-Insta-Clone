import React from "react";
import "./searchBar.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = searchHandler => {
  return (
    <div className ='searchBar'>
      <div className = 'logo'>
        <FontAwesomeIcon className ='logo-icon' icon={["fab", "instagram"]} />
        <h1><span>|</span>Instagram</h1>
      </div>
      <form className='search-form'>
        <FontAwesomeIcon className='search-icon' icon="search" />
        <input
          className="searchBox"
          type="search"
          onChange={() => searchHandler}
          placeholder={"Search"}
        />
      </form>
      <div className='socials'>
        <FontAwesomeIcon icon={["far", "compass"]} />
        <FontAwesomeIcon icon={["far", "heart"]} />
        <FontAwesomeIcon icon={["far", "user"]} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchHandler: PropTypes.func
};
export default SearchBar;
