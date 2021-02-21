import React, { useState, useEffect } from "react";
import "../class/dc.css";

function Clock() {
  const dateInfo = {
    time: new Date().toLocaleTimeString(),
    date: new Date().toDateString(),
  };
  const [dateTime, setDate] = useState(dateInfo);

  useEffect(() => {
    // effect
    const timer = setInterval(
      () =>
        setDate({
          dateTime: {
            time: new Date().toLocaleTimeString(),
            date: new Date().toLocaleDateString(),
          },
        }),
      1000
    );

    return () => {
      // cleanup()
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock clockf">
      <div className="timer">
        {dateInfo.time}
        <div className="day">{dateInfo.date}</div>
      </div>
    </div>
  );
}

export default Clock;
