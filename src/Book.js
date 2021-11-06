import React from "react";

import Author from './Author'

class Book extends React.Component {
  render() {
    if (!this.props.book)
      return <div>Empty book</div>;

    const {
      book: { title, description, pages, language, progress, cover, author_id, min_price, desired_price, current_sum, expected_sum }
    } = this.props;

    return (
      <div>
        <div>
          <img src={cover} alt={title}/>
        </div>
        <div>{title}</div>
        <div>description: {description}</div>
        <div>language: {language}</div>
        <div>progress: {progress}</div>
        <div>min_price: {min_price}</div>
        <div>desired_price: {desired_price}</div>
        <div>current_sum: {current_sum}</div>
        <div>expected_sum: {expected_sum}</div>
        <div>Pages: {pages}</div>
      </div>
    )
  }
};

export default Book;