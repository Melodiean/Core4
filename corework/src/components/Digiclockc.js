import React, { Component } from "react";
import Title from "../class/Title";
import Clock from "../class/Clock";
import "../class/dc.css";
class Digiclockc extends Component {
  render() {
    return (
      <div className="AppD">
        <Title title="User" />
        <Clock clock="ClockData" />
      </div>
    );
  }
}

export default Digiclockc