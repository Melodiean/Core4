import React, { Component } from "react";
import '../App.css';

class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: new Date().getDay(),
      dat: new Date().getDate(),
      month: new Date().getMonth(),
    };
  }

  render() {
    if (this.state.day === 0) {
      this.setState({ day: "SUN" });
    }
    if (this.state.day === 1) {
      this.setState({ day: "MON" });
    }
    if (this.state.day === 2) {
      this.setState({ day: "TUE" });
    }
    if (this.state.day === 3) {
      this.setState({ day: "WED" });
    }
    if (this.state.day === 4) {
      this.setState({ day: "THU" });
    }
    if (this.state.day === 5) {
      this.setState({ day: "FRI" });
    }
    if (this.state.day === 6) {
      this.setState({ day: "SAT" });
    }

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

    // let getMonth = months[month]

    if (this.state.month === 0) {
      this.setState({ month: months[0] });
    }

    if (this.state.month === 1) {
      this.setState({ month: months[1] });
    }

    if (this.state.month === 2) {
      this.setState({ month: months[2] });
    }

    if (this.state.month === 3) {
      this.setState({ month: months[3] });
    }

    if (this.state.month === 4) {
      this.setState({ month: months[4] });
    }

    if (this.state.month === 5) {
      this.setState({ month: months[5] });
    }

    if (this.state.month === 6) {
      this.setState({ month: months[6] });
    }

    if (this.state.month === 7) {
      this.setState({ month: months[7] });
    }

    if (this.state.month === 8) {
      this.setState({ month: months[8] });
    }

    if (this.state.month === 9) {
      this.setState({ month: months[9] });
    }
    if (this.state.month === 10) {
      this.setState({ month: months[10] });
    }

    if (this.state.month === 11) {
      this.setState({ month: months[11] });
    }

    return (
      <div className='day'>
        {this.state.day} {this.state.dat} {this.state.month}
      </div>
    );
  }
}
export default Day;
