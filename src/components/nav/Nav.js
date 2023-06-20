import React, { useState } from "react";

import "./nav.css";

import { AiFillHome } from "react-icons/ai";
import { FaUser, FaFolderOpen } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function Nav({theme, toggleTheme}) {
  const [navActive, setNavActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        className={navActive === "#" ? "active" : ""}
        onClick={() => setNavActive("#")}
        title="Home"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        className={navActive === "#about" ? "active" : ""}
        onClick={() => setNavActive("#about")}
        title="About"
      >
        <FaUser />
      </a>
      <a
        href="#projects"
        className={navActive === "#projects" ? "active" : ""}
        onClick={() => setNavActive("#projects")}
        title="Projects"
      >
        <FaFolderOpen />
      </a>
      <a
        href="#contact"
        className={navActive === "#contact" ? "active" : ""}
        onClick={() => setNavActive("#contact")}
        title="Contact"
      >
        <MdCall />
      </a>
      |
      <a href="#" onClick={() => toggleTheme()} title="Toggle Mode">
        {theme == "light-theme" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </a>
    </nav>
  );
}

export default Nav;
