import React, { useState } from "react";

const diceStyle = {
  color: "purple",
  width: "100px",
  height: "100px",
  padding: "10px",
  margin: "5px",
  textAlign: "center",
  border: "none",
  borderRadius: "20px",
  fontSize: "5em",
};

const buttonStyle = {
  backgroundColor: "purple",
  color: "white",
  padding: "10px",
  fontSize: "2em",
  margin: "5px",
  border: "none",
  borderRadius: "8px",
};

function Roll() {
  const dice = {
    die1: Math.floor(Math.random() * 6) + 1,
    die2: Math.floor(Math.random() * 6) + 1,
  };
  const [dices, setDie] = useState([dice]);

  function rollDice() {
    setDie({
      die1: dices.die1,
      die2: dices.die2,
    });
  }

  return (
    <div className="App">
      <div className="dice">
        <p style={diceStyle} className="die">
          {dice.die1}
        </p>
        <p style={diceStyle} className="die">
          {dice.die2}
        </p>
      </div>
      <button style={buttonStyle} onClick={rollDice}>
        ROLL
      </button>
    </div>
  );
}

export default Roll;
