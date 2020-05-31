import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBooks from './ListBooks';
import Search from './Search';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

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

    .then(resp => {
      console.log(resp);
    });

    book.shelf = shelf;
    this.setState(prevState => ({
      myBooks: prevState.myBooks.filter(b => b.id !== book.id.concat([book]))
    }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/'
          render = {() => (
            <ListBooks
              myBooks={this.state.myBooks}
              handleUpdate={this.handleUpdate}
            />
        )}/>
        <Link to='/search' className="open-search">
          <button>Add a book</button>
        </Link>
        <Route path='/search' component = {() => (
          <Search
            myBooks={this.state.myBooks}
            handleUpdate={this.handleUpdate}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
