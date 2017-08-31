import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BooksSearch from './BooksSearch';
import SearchResults from './SearchResults';
import BooksHeader from './BooksHeader';
import BooksContent from './BooksContent';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      search: [],
      term: '',
    };
    
    this.handleMoveBook = this.handleMoveBook.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}))
  }

  handleMoveBook (selectedBook, shelf) {
    BooksAPI.update(selectedBook, shelf).then(() => {
      selectedBook.shelf = shelf
      this.setState({book: [
        ...this.state.books.filter(storedBook => storedBook.id !== selectedBook.id), selectedBook
      ]}, this.componentDidMount());
    })
  }

  handleSearch (term) {
    if (term) {
      BooksAPI.search(term, 20).then(searchedBooks => {
        this.setState({search: searchedBooks});
      });
    }
  }

  handleInput (term) {
    term ? this.setState({term: term}, this.handleSearch(term)) : this.setState({term: ''});
  }

  render() {
    const books = this.state.books
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    const wantToRead = books.filter(book => book.shelf === 'wantToRead')
    const read = books.filter(book => book.shelf === 'read')
    const searchedBooks = this.state.search

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <BooksHeader/>
            <BooksContent
              currentlyReading={currentlyReading}
              wantToRead={wantToRead}
              read={read}
              handleMoveBook={this.handleMoveBook} />
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
          )}/>
        <Route path='/search' render={({ history }) => (
            <div className="search-books">
              <BooksSearch
                handleSearch={this.handleSearch}
                handleInput={this.handleInput}
                term={this.state.term}
              />
              <SearchResults
                handleMoveBook={this.handleMoveBook}
                searchedBooks={searchedBooks}
                term={this.state.term}
              />
            </div>
            )}/>
      </div>
    )
  }
}

export default BooksApp