import React from 'react';
import BookShelf from './BookShelf'

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

};

export default BooksContent
