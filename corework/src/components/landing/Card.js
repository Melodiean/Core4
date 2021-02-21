import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <i className={props.class}></i>
      <h3>{props.head}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
