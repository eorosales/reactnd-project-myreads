import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelf: this.props.shelf
    }
  }

  componentDidMount() {
    this.setState({ shelf: this.props.shelf })
  }

  handleChange(value) {
    this.setState({
      shelf: value
    })
  }

  render() {

    const { book, title, authors, cover, handleUpdate } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${ cover })` }}></div>
            <div className="book-shelf-changer">
              <select
                value={this.state.shelf}
                onChange={
                  (event) => this.handleChange(event.target.value, handleUpdate(book, event.target.value))
                }>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ title }</div>
          <div className="book-authors">{ authors }</div>
        </div>
      </li>
    )
  }
}

export default Book;
