import React, { Component } from "react";
import Title from "./Title";
import Clock from "./Clock";
import "../App.css";
class Main extends Component {
  render() {
    return (
      <div className="App">
        <Title title="User" />
        <Clock clock="ClockData" />
      </div>
    );
  }
}
export default Main;
