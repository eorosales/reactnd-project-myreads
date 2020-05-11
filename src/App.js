import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './Bookshelf';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.state = {
      myBooks: []
    }
  }

  // Initialize bookshelves with their current shelf when component renders
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        myBooks: books
      }))
    })
  }

  handleUpdate(book, shelf) {
      BooksAPI.update(book, shelf)
      book.shelf = shelf;
      this.setState(prevState => ({
        myBooks: prevState.myBooks.filter(b => b.id !== book.id.concat([book]))
      }))
  }

  render() {
    return (<div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              bookshelfTitle='Currently Reading'
              currentBooks={this.state.myBooks.filter(b => b.shelf === 'currentlyReading')}
              handleUpdate={this.handleUpdate}
              />
            <Bookshelf
              bookshelfTitle='Want to Read'
              currentBooks={this.state.myBooks.filter(b => b.shelf === 'wantToRead')}
              handleUpdate={this.handleUpdate}
              />
            <Bookshelf
              bookshelfTitle='Read'
              currentBooks={this.state.myBooks.filter(b => b.shelf === 'read')}
              handleUpdate={this.handleUpdate}
              />
          </div>
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
        </div>
      </div>
    </div>)
  }
}

export default BooksApp
