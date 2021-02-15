import React, { useState } from "react";
import "../App.css";

function Day(props) {
  const dates = {
    day: new Date().getDay(),
    dat: new Date().getDate(),
    month: new Date().getMonth(),
  };

  const [data, setData] = useState(dates);

  if (data.day === 0) {
    setData({ day: "SUN" });
  }
  if (data.day === 1) {
    setData({ day: "MON" });
  }
  if (data.day === 2) {
    setData({ day: "TUE" });
  }
  if (data.day === 3) {
    setData({ day: "WED" });
  }
  if (data.day === 4) {
    setData({ day: "THU" });
  }
  if (data.day === 5) {
    setData({ day: "FRI" });
  }
  if (data.day === 6) {
    setData({ day: "SAT" });
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

  if (data.month === 0) {
    setData({ month: months[0] });
  }

  if (data.month === 1) {
    setData({ month: months[1] });
  }

  if (data.month === 2) {
    setData({ month: months[2] });
  }

  if (data.month === 3) {
    setData({ month: months[3] });
  }

  if (data.month === 4) {
    setData({ month: months[4] });
  }

  if (data.month === 5) {
    setData({ month: months[5] });
  }

  if (data.month === 6) {
    setData({ month: months[6] });
  }

  if (data.month === 7) {
    setData({ month: months[7] });
  }

  if (data.month === 8) {
    setData({ month: months[8] });
  }

  if (data.month === 9) {
    setData({ month: months[9] });
  }
  if (data.month === 10) {
    setData({ month: months[10] });
  }

  if (data.month === 11) {
    setData({ month: months[11] });
  }

  return (
    <div className="day">
      {data.day} {data.dat} {data.month}
    </div>
  );
}

export default Day;
