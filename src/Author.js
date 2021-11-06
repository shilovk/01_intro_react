import React from "react";
import Book from "./Book";

class Author extends React.Component {
  render() {
    if ((!this.props.author) || (!this.props.book))
      return <div>Empty author</div>;

    const {
      author: { id, name, email, avatar, description }
    } = this.props;

    return (
      <div>
        <div>
          <img src={avatar} alt={name}/>
        </div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{description}</div>
        <br />
        <Book book={this.props.book} />
      </div>
    )
  }
};

export default Author;