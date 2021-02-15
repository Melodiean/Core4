import React, { Component } from "react";
import "../App.css";

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date().getDay(),
      dat: new Date().getDate(),
      month: new Date().getMonth(),
    };
  }

  componentDidMount() {
    const dayz = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    let months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];

    this.setState({
      day: dayz[this.state.day],
      month: months[this.state.month],
    });
  }

  render() {
    return (
      <div className="day">
        {this.state.day} {this.state.dat} {this.state.month}
      </div>
    );
  }
}
export default Day;
