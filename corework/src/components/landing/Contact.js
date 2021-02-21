import React from "react";
import "./land.css";

const Contact = () => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form action="#" className="formStyles">
        <input className="Linput" type="text" placeholder="Enter Email..." />
        <textarea className="Ltextarea" maxLength="25" placeholder="Enter Message..."></textarea>
        <button className="Lbutton">SEND</button>
      </form>
    </div>
  );
};

export default Contact;
