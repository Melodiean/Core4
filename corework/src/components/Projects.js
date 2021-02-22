import React from 'react'
import { Link } from "react-router-dom";
import dice from '../dice.png'
import land from '../land.png'
import dc from '../dc.png'
import fc from '../fc.png'
import todo from '../todo.png'

function Projects() {
  return (
    <div className="proj al">
      <h1>MINI PROJECTS</h1>
      <div>

      <Link to="/Landing">
        <img src={land} alt="roll_dice" />
      </Link>
      <p>A Simple Landing Site</p>
      </div>
<div>

      <Link to="/Todo">
<img src={todo} alt="" />
      </Link>
      <p>A Simple ToDo</p>
</div>
<div>

      <Link to="/Digiclockc">
     <img src={dc} alt="" />   
      </Link>
      <p>With Class Components</p>
</div>
<div>

      <Link to="/Digiclockf">
      <img src={fc} alt="" />  
      </Link>
      <p>With Functional Components</p>
</div>
<div>

      <Link to="/Dieroll">
        <img src={dice} alt="dice" />
      </Link>
      <p>Roll The Dice</p>
</div>

    </div>
  );
}

export default Projects;
