import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {

    const { bookshelfTitle, currentBooks, currentShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
            currentBooks.map((book) => (
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

export default Bookshelf;
