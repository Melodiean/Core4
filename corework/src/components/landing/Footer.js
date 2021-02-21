import React from "react";
import "./fstyle/css/all.css";
import "./fstyle/css/all.min.css";

const Footer = (props) => {
  return (
    <div className="footer">
      <p>We are available 24 hours. Get in touch.</p>
      <footer>
        <div>
          <i className="fa fa-map"></i>
          {props.location}, {props.country}
        </div>
        <div>
          <i className="fa fa-phone"></i>
          {props.tel}
        </div>
        <div>
          <i className="fa fa-envelope"> </i>
          {props.email}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
