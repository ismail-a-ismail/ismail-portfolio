import React from "react";
import "./header.css";

import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import ME from "../../assets/images/ismail-pic.png";
// import ME1 from "../../assets/images/ismail-pic-1.png";
import CV from "../../assets/ismail_CV.pdf";


function Header() {
  return (
    <header className="header">
      <div className="container header_container">
        <div className="header_content">
        <h3>Hello I'm</h3>
        <h1>Ismail Ahmed</h1>
        <h4>Front-End Developer</h4>

        <div className="header_btns">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
        </div>

        <div className="header_picture">
          <img src={ME} alt="me" />
        </div>

        <div className="header_links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn Account">
            <FaLinkedin />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook Page">
            <FaFacebookSquare />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="Github Account">
            <FaGithub />
          </a>
        </div>

        <a href="#contact" className="scroll_down">
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
}

export default Header;
