import React from 'react';
import Book from './Book'

const SearchResults = ({searchedBooks, handleMoveBook, term}) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchedBooks.length > 1 && searchedBooks.map(book => {
          return (
            <Book key={book.id} handleMoveBook={handleMoveBook} book={book}/>
          )
        })}
      </ol>
    </div>
  );
}

SearchResults.propTypes = {
};

export default SearchResults
