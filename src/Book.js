import React from 'react'

const Book = ({book, handleMoveBook}) => {

  const shelf = book.shelf
  const authors = book.authors || null
  const title = book.title
/* got some help from the slack channel on the thumbnail issue */
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'http://dvepublishing.com/images/cover_not_available.jpg'})` }}></div>
          <div className="book-shelf-changer">
            <select value={shelf} onChange={event => handleMoveBook(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors && authors.map((author, i) => <div key={i} className="book-authors">{author}</div>)}
      </div>
    </li>
  )
}

export default Book
