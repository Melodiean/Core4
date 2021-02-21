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
      <Link to="/Landing">
        <img src={land} alt="roll_dice" />
      </Link>
      <p>A Simple Landing Site</p>
      <Link to="/Todo">
<img src={todo} alt="" />
      </Link>
      <p>A Simple ToDo</p>
      <Link to="/Digiclockc">
     <img src={dc} alt="" />   
      </Link>
      <p>With Class Components</p>
      <Link to="/Digiclockf">
      <img src={fc} alt="" />  
      </Link>
      <p>With Functional Components</p>
      <Link to="/Dieroll">
        <img src={dice} alt="dice" />
      </Link>
      <p>Roll The Dice</p>
    </div>
  );
}

export default Projects;
