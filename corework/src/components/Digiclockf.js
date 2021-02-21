import React from "react";
import Title from "../functional/Title";
import Clock from "../functional/Clock";
import "../class/dc.css";

function Digiclockf() {
  return (
    <div className="AppD">
      <Title greeting="Hello" title="User" />
      <Clock clock="ClockData" />
    </div>
  );
}

export default Digiclockf;
