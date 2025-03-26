import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./Footer.css";
import React from "react";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Rayan, Bardhaman, 713101</p>
              <p>India.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91-6523894561
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              atindraghosh2017@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About Myself</h4>
          <p>
            Hi, Atindra Ghosh here. I am a web developer recently graduated in
            Information Technology(B.Tech) from Techno International Newtown,
            Kolkata. I have a good design sense which push me to go as a
            frontend developer and after that I have started learning Backend
            and database system to become a full stack developer.{" "}
          </p>
          <div className="social">
            <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
