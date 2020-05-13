import React from 'react';
import Bookshelf from './Bookshelf';
import { Link } from 'react-router-dom';

function ListBooks(props) {

  const { myBooks, handleUpdate } = props;

  return (

    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

        <div>
          <div className="list-books-content">
            <div>
              <Bookshelf
                bookshelfTitle='Currently Reading'
                currentBooks={myBooks.filter(b => b.shelf === 'currentlyReading')}
                handleUpdate={handleUpdate}
                />
              <Bookshelf
                bookshelfTitle='Want to Read'
                currentBooks={myBooks.filter(b => b.shelf === 'wantToRead')}
                handleUpdate={handleUpdate}
                />
              <Bookshelf
                bookshelfTitle='Read'
                currentBooks={myBooks.filter(b => b.shelf === 'read')}
                handleUpdate={handleUpdate}
                />
            </div>
          </div>
          <Link
            to='/search'
            className="open-search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
  )
}

export default ListBooks;
