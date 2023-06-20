import React from "react";
import "./experiance.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {SiRedux} from 'react-icons/si'


function Experiance() {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container">
        <div className="exp_frontend animate-top">
          <h3>Front-End Development</h3>
          <div className="experiance_content">
            <article className="experiance_details">
              <FaHtml5 className="experiance_details_icon html_icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experiance_details">
              <FaCss3Alt className="experiance_details_icon css_icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experiance_details">
              <FaSass className="experiance_details_icon sass_icon" />
              <div>
                <h4>SASS</h4>
                <small>Intermediate</small>
              </div>
            </article>

            <article className="experiance_details">
              <FaBootstrap className="experiance_details_icon bootstrap_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experiance_details">
              <FaJsSquare className="experiance_details_icon js_icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experiance_details">
              <FaReact className="experiance_details_icon reactjs_icon" />
              <div>
                <h4>React.js</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experiance_details">
              <SiRedux className="experiance_details_icon redux_icon" />
              <div>
                <h4>Redux</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;
