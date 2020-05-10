import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentShelf: this.props.shelf
    }
  }

  handleChange(event) {
    this.setState({
      currentShelf: event.target.value
    })
  }

  render() {

    const { title, authors, cover, handleUpdate } = this.props;

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
                value={this.state.currentShelf}
                onChange={
                  (event) => this.handleChange(event,
                  handleUpdate(this.props, event.target.value))
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
