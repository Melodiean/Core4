import React, { useState } from "react";

const diced = {
  backgroundColor:"rgba(180,180,180,.5)",
  margin:"10vw 20vw",
  border:"1px solid gray",
  borderRadius:"15px"
}

const diceStyle = {
  width: "100px",
  height: "100px",
  padding: "10px",
  margin: "5px",
  textAlign: "center",
  border: "none",
  borderRadius: "20px",
  fontSize: "5em",
  backgroundColor: "white",
  boxShadow:
    "1px 1px 5px 0 rgba(0, 0, 0, 0.425), -1px -1px 5px 0 rgba(0, 0, 0, 0.425)",
};

const buttonStyle = {
  backgroundColor: "black",
  color: "white",
  padding: "10px",
  fontSize: "2em",
  margin: "5px",
  border: "none",
  borderRadius: "8px",
};

const diceCon = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Dieroll() {
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
    <div style={diced}>
<h1>Roll the Dice</h1>
      <div style={diceCon}>
        <p
          style={diceStyle}
        >
          {dice.die1}
        </p>
        <p
          style={diceStyle}
        >
          {dice.die2}
        </p>
      </div>
      <button style={buttonStyle} onClick={rollDice}>
        ROLL
      </button>
    </div>
  );
}

export default Dieroll;
