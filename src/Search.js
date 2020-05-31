import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book';
import { Link } from 'react-router-dom';

class Search extends Component {
  constructor(props) {
    super(props);
    this.updateQuery = this.updateQuery.bind(this);
    this.state = {
      newBooks: [],
      searchResults: [],
      query: ''
    }
  }

  updateQuery(query) {
    this.setState(() => ({
      query: query.trim()
    }))

    if(query !== '') {
      BooksAPI.search(query)
      .then(results => {
        // if results return an error when a query is entered, empty array f
        // for searchResults
        if(query === '' || results.error) {
          this.setState(prevState => ({
            ...prevState,
            searchResults: []
          }))
        } else {
        // if no error, set results array to searchResults local state
            this.setState(prevState => ({
              ...prevState,
              searchResults: results
            }))
        }
      })
    } else {
      this.setState(prevState => ({
        ...prevState,
        searchResults: []
      }))
    }
  }


  render() {

    const { searchResults, query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">

          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
            searchResults.map((book) => (
              <Book
                book={book}
                key={book.id}
                title={book.title}
                authors={book.authors}
                cover={book.imageLinks.smallThumbnail}
                shelf={book.shelf}
                handleUpdate={this.props.handleUpdate}
              />
            ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search;
