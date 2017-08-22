import React from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';

const BooksContent = ({currentlyReading, wantToRead, read, handleMoveBook}) => {
  return (
    <div>
      <BookShelf
        status='Currently Reading'
        books={currentlyReading}
        handleMoveBook={handleMoveBook}
      />
      <BookShelf
        status='Want to Read'
        books={wantToRead}
        handleMoveBook={handleMoveBook}
      />
      <BookShelf
        status='Read'
        books={read}
        handleMoveBook={handleMoveBook}
      />
    </div>
  );
}

BooksContent.propTypes = {
  currentlyReading: PropTypes.array.isRequired,
  read: PropTypes.array.isRequired,
  wantToRead: PropTypes.array.isRequired,
  handleMoveBook: PropTypes.func.isRequired,
};

export default BooksContent
