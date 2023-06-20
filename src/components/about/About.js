import React from "react";
import "./about.css";

import ME from "../../assets/images/ismail-grad.jpeg";
import { FaShieldAlt, FaUserCheck, FaFolderOpen } from "react-icons/fa";


function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_picture">
          <img src={ME} alt="Me" />
        </div>

        <div className="about_content">
          <div className="about_boxs">
            <article className="about_boxs_item">
              <FaShieldAlt className="about_icon" />
              <h5>Experience</h5>
              <p>3+ Years Working</p>
            </article>

            <article className="about_boxs_item">
              <FaUserCheck className="about_icon" />
              <h5>Clients</h5>
              <p>75+ worldwide</p>
            </article>

            <article className="about_boxs_item">
              <FaFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <p>15+ project</p>
            </article>
          </div>

          <ul className="about_list">
            <li>
              Graduated from faculty of Computer Science and IT <br /> -
              <a
                href="https://www.facebook.com/ACU.Official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Ahram Candian University
              </a>{" "}
              -{" "}
              <a
                href="https://drive.google.com/file/d/1_nMHyBW4VxbkuQzvqHGvGVDFHe6KmK85/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Graduation Certificate
              </a>
            </li>
            <li>3+ years of Experince in Front End Development</li>

            {/* <li>
              Member at
              <a href="https://www.facebook.com/ACUCSSU/" target="_blank">
                {" "}
                ACU CS Student Union
              </a>
            </li> */}
          </ul>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
