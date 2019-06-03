import React from 'react';
import './searchBar.css';

const SearchBar = (props, searchHandler) => {
    return(
        <div>
          <form>
          <input type='search' onChange={() => searchHandler} placeholder={'Search'} />
          </form>
        </div>
    )
}
export default SearchBar