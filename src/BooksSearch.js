import React from 'react';
import { Link } from 'react-router-dom'

const BooksSearch = ({handleInput, handleSearch, term}) => {
    return (
          <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input value={term} onChange={event => handleInput(event.target.value)} type="text" placeholder="Search by title or author"/>
            </div>
          </div>
    );
}

export default BooksSearch
