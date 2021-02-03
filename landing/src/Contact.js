import React from "react";
import "./App.css";

const Contact = (props) => {
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <form action="#" className="formStyles">
        <input type="text" placeholder="Enter Email..." />
        <textarea maxLength="25" placeholder="Enter Message..."></textarea>
        <button>SEND</button>
      </form>
    </div>
  );
};

export default Contact;
