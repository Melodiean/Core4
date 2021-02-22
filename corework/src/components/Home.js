import React from "react";
import Projects from "./Projects";
import Footer from "./Footer"
import "../App.css"
function Home() {
  return (
    <div>
      <h1>CORE4</h1>
      <p>React Topics Covered</p>
      <ul className="appList">
        <li>
          Components [Functional and Class]
        
        </li>
        <li>States</li>
        <li>Hooks</li>
        <li>Lifecycle Methods</li>
        <li>Routers</li>
      </ul>
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
