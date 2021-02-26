import React from "react";
import { Link } from "react-router-dom";

function Pages() {
  return <div>
      <Link to="/">HOME</Link>
      <Link to="/login">LOGIN</Link>
      <Link to="/register">REGISTER</Link>
      <Link to="/questions">QUESTIONS</Link>
  </div>
  
}

export default Pages;
