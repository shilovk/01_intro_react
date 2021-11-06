import React from "react";

import Author from "./Author";

class App extends React.Component {
  render() {
    return (
      <div>
        <Author author={this.props.author} book={this.props.book} />
      </div>
    )
  }
}

export default App;