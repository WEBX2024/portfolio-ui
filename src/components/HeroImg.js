import "./HeroImg.css";
import React from 'react';
import IntroImg from "../Assets/IntroImg.png";
import {Link} from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
         <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A FRESHER</p>
        <h1>Web Developer.</h1>
        <div>
          <Link to="/Project" className="btn">Projects</Link>
          <Link to="/Contact" className="btn btn-light">contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg;