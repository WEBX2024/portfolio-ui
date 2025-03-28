import React from "react";
import { Link } from "react-router-dom";
import "./Opening.css";

const OpeningPage = () => {
  return (
    <div className="opening-container">
      <h1 className="fade-in">Portfolio</h1>
      <p className="stretch-in">Build and design your own portfolio with ease</p>
      <Link to="/signup" className="btn slide-up">Get Started</Link>
    </div>
  );
};

export default OpeningPage;
