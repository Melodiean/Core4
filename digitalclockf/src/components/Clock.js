import React, { useState, useEffect } from "react";
import "../App.css";
import Day from "./Day";

function Clock(props) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // effect
    const timer = setInterval(() => setDate({ date: new Date() }), 1000);

    return () => {
      // cleanup
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">
      <div className="timer">
        {date.toLocaleTimeString()}

        <Day />
      </div>
    </div>
  );
}

export default Clock;
