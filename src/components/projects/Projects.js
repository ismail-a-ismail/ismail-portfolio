import React, { useEffect, useState } from "react";
import "./projects.css";

import simpleProfileImg from "../../assets/images/simpleProfileImg.png";
import agencyWebsiteImg from "../../assets/images/agencyWebsiteImg.png";
import MasaredWebsiteImg from "../../assets/images/MasaredWebsiteImg.png";
import productManagementSysImg from "../../assets/images/productManagementSysImg.png";
import TRVLImg from "../../assets/images/TRVLImg.png";
import mogoImg from "../../assets/images/mogoImg.png";
import theRoseImg from "../../assets/images/theRoseImg.png";
import todoImg from "../../assets/images/todoImg.png";

function Projects() {

  const data = [
    {
      id: 1,
      title: "Simple Profile",
      image: simpleProfileImg,
      category: "html & css",
      github: "https://github.com/ismail-a-ismail/simple-profile",
      demo: "https://ismail-a-ismail.github.io/simple-profile/",
    },
    {
      id: 2,
      title: "Agnecy Website",
      image: agencyWebsiteImg,
      category: "html & css",
      github: "https://github.com/ismail-a-ismail/agency-website",
      demo: "https://ismail-a-ismail.github.io/agency-website/",
    },
    {
      id: 3,
      title: "Masared Website",
      image: MasaredWebsiteImg,
      category: "html & css",
      github: "https://github.com/ismail-a-ismail/Masared-Website",
      demo: "https://ismail-a-ismail.github.io/Masared-Website/",
    },
    {
      id: 4,
      title: "TODO",
      image: todoImg,
      category: "javascript",
      github: "https://github.com/ismail-a-ismail/TodoList",
      demo: "https://ismail-a-ismail.github.io/TodoList/",
    },
    {
      id: 5,
      title: "Product Management System",
      image: productManagementSysImg,
      category: "javascript",
      github: "https://github.com/ismail-a-ismail/product-management-system",
      demo: "https://ismail-a-ismail.github.io/product-management-system/",
    },
    {
      id: 6,
      title: "TRVL website",
      image: TRVLImg,
      category: "reactjs",
      github: "https://github.com/ismail-a-ismail/TRVL",
      demo: "",
    },
    {
      id: 7,
      title: "MOGO Website - ITI project",
      image: mogoImg,
      category: "reactjs",
      github: "https://github.com/ismail-a-ismail/iti-final-project",
      demo: "https://mogo-iti-final-project.netlify.app/",
    },
    {
      id: 8,
      title: "The Rose",
      image: theRoseImg,
      category: "html & css",
      github: "https://github.com/ismail-a-ismail/the-rose-website",
      demo: "https://ismail-a-ismail.github.io/the-rose-website/",
    },
  ];

  const [dataProjects, setDataProjects] = useState(data);
  const [categoryBtns, setCategoryBtns] = useState([]);

  useEffect(() => {
    const categories = dataProjects.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );

    setCategoryBtns(categories);
  }, []);

  function btnEvents(category) {
    // console.log(category);

    const menuCategory = data.filter(function (menuItem) {
      // console.log(menuItem.category);
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "all") {
      setDataProjects(data);
    } else {
      setDataProjects(menuCategory);
    }
  }

  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      {/* filter buttons */}
      <div class="btn-container">
        {/* {console.log(categoryBtns)} */}
        {categoryBtns.map((category, index) => {
          return (
            <button
              className="btn"
              onClick={() => btnEvents(category)}
              key={index}
              data-id={category}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="container projects_container">
        {dataProjects.map((project) => {
          const { id, image, title, github, demo } = project;

          return (
            <article key={id} className="projects_item">
              <div className="projects_item_image">
                <img src={image} alt="project item" />
              </div>
              <h4>{title}</h4>
              <div className="projects_item_btns">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
