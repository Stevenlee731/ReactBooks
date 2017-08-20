import React from 'react';
import BookShelf from './BookShelf'

const BooksContent = ({currentlyReading, wantToRead, read}) => {
  return (
    <div>
      <BookShelf
        status='Currently Reading'
        books={currentlyReading}
      />
      <BookShelf
        status='Want to Read'
        books={wantToRead}
      />
      <BookShelf
        status='Read'
        books={read}
      />
    </div>
  );
}

BooksContent.propTypes = {

};

export default BooksContent
