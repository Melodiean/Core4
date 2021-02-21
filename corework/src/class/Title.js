import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hello",
    };
  }

  render() {
    return (
      <h1 className="hh">
        {this.state.greeting}, {this.props.title}
      </h1>
    );
  }
}
export default Title;
