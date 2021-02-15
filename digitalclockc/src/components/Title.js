import React, { Component } from "react";

class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "Hey",
    };
  }

  render() {
    return (
      <h1>
        {this.state.greeting}, {this.props.title}
      </h1>
    );
  }
}
export default Title;
