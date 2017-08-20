import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import BooksSearch from './BooksSearch'
import BooksHeader from './BooksHeader'
import BooksContent from './BooksContent'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      search: [],
      term: '',
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  render() {
    const books = this.state.books
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <BooksHeader/>
            <BooksContent
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
          )}/>
        <Route path='/search' render={({ history }) => (
              <BooksSearch />
            )}/>
      </div>
    )
  }
}

export default BooksApp
