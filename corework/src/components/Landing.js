import { React, Fragment } from "react";
import "./landing/land.css";
import Header from "./landing/Header";
import Card from "./landing/Card";
import Contact from "./landing/Contact";
import Footer from "./landing/Footer";
import "./landing/fstyle/css/all.css";
import "./landing/fstyle/css/all.min.css";

function Landing() {
  return (
    <Fragment>
      <Header />
      <Card
        class="fa fa-3x fa-building"
        head="About Us"
        text="All about CompanyName..."
      />
      <Card
        class="fa fa-3x fa-hands"
        head="Mission"
        text="The mission of CompanyName is..."
      />
      <Card
        class="fa fa-3x fa-globe-africa"
        head="Our Values"
        text="The values of CompanyName are..."
      />
      <Contact />
      <Footer
        location="Kampala"
        country="Uganda"
        tel="+256 123 541 254"
        email="companyname@gmail.com"
      />
    </Fragment>
  );
}

export default Landing;