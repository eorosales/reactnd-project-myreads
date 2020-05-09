import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Bookshelf from './Bookshelf';

class BooksApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        currentlyReading: books.filter((b) => b.shelf === 'currentlyReading'),
        wantToRead: books.filter((b) => b.shelf === 'wantToRead'),
        read: books.filter((b) => b.shelf === 'read')
      }))
    })
  }


  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf bookshelfTitle='Currently Reading' currentBooks={this.state.currentlyReading} />
                <Bookshelf bookshelfTitle='Want to Read' currentBooks={this.state.wantToRead} />
                <Bookshelf bookshelfTitle='Read' currentBooks={this.state.read} />
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksApp
