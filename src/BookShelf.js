import React from 'react'
import Book from './Book'

const BookShelf = ({status, books, handleMoveBook}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            return (
              <Book key={book.id} handleMoveBook={handleMoveBook} book={book}/>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
