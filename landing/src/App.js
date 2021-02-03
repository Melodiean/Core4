import { Fragment } from "react";
import "./App.css";
import Header from "./Header";
import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";
import "./fstyle/css/all.css";
import "./fstyle/css/all.min.css";

function App() {
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

export default App;
