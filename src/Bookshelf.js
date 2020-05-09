import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {

    const { bookshelfTitle, currentBooks } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
            currentBooks.map((book) => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  cover={book.imageLinks.smallThumbnail}
                  shelf={book.shelf}
                />
              </li>
            ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
