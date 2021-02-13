import "./App.css";
import React, { Component } from "react";

import Locate from "./geolocation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  decrement = () => {
    if (this.state.value <= 0) {
      this.setState({
        value: 0,
      });
    } else {
      this.setState({
        value: this.state.value - 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>LOCATION</h1>
        <Locate />
        <h1>COUNTER</h1>
        <header className="App-header">
          <button onClick={this.decrement} className="button">
            -
          </button>
          <>{this.state.value}</>
          <button onClick={this.increment} className="button">
            +
          </button>
        </header>
      </div>
    );
  }
}

export default App;
