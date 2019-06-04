import React from 'react';
import './searchBar.css';
import PropTypes from 'prop-types';

const SearchBar = (searchStr ,searchHandler) => {
    return(
        <div>
          <form>
          <input type='search' onChange={() => searchHandler } value= {searchStr} placeholder={'Search'} />
          </form>
        </div>
    )
}
SearchBar.propTypes={
    searchStr:PropTypes.string,
    searchHandler:PropTypes.func.isRequired

}
export default SearchBar