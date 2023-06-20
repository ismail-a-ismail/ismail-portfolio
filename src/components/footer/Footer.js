import React from "react";
import { FaLinkedin, FaFacebookSquare, FaGithub } from "react-icons/fa";
import ismailLogoDark from "../../assets/images/ismail-logo-d.png";
import ismailLogoLight from "../../assets/images/is.png";

import "./footer.css";

function Footer({ theme }) {
  return (
    <footer>
      <a href="/" className="footer_logo">
        <img
          src={theme === "dark-theme" ? ismailLogoLight : ismailLogoDark}
          alt="footer-logo"
        />
      </a>

      <ul className="footer_links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.facebook.com/profile.php?id=100002701500239"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.linkedin.com/in/ismail-ahmed-54a549195/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ismail-a-ismail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <p>&copy; All rightes reserved to Ismail Ahmed </p>
      </div>
    </footer>
  );
}

export default Footer;
