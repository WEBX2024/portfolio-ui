import { Link } from "react-router-dom"
import "./Navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <div className="header">
        <Link to={"/"}>
            <h1>Portfolio.</h1>
        </Link>
        <ul className="Nav-menu">
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Project"}>Project</Link>
            </li>
            <li>
                <Link to={"/Contact"}>Contact</Link>
            </li>
            <li>
                <Link to={"/AboutUs"}>About Us</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar