import React from 'react'
import Book from './Book'

const BookShelf = ({status, books}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => {
            return (
              <Book key={book.id} title={book.title} authors={book.authors} cover={book.imageLinks.thumbnail}/>
            )
          })}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf
