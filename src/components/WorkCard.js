import "./WorkCard.css"
import IntroImg from "../Assets/IntroImg.png"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="project-card">
                <img src={IntroImg} alt="imgage"/>
                <h2 className="project-title">Project title</h2>
                <div className="pro-details">
                    <p>This is a text</p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard