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
      github: "https://github.com/ismail-1998/simple-profile",
      demo: "https://ismail-1998.github.io/simple-profile/",
    },
    {
      id: 2,
      title: "Agnecy Website",
      image: agencyWebsiteImg,
      category: "html & css",
      github: "https://github.com/ismail-1998/agency-website",
      demo: "https://ismail-1998.github.io/agency-website/",
    },
    {
      id: 3,
      title: "Masared Website",
      image: MasaredWebsiteImg,
      category: "html & css",
      github: "https://github.com/ismail-1998/Masared-Website",
      demo: "https://ismail-1998.github.io/Masared-Website/",
    },
    {
      id: 4,
      title: "TODO",
      image: todoImg,
      category: "javascript",
      github: "https://github.com/ismail-1998/TodoList",
      demo: "https://ismail-1998.github.io/TodoList/",
    },
    {
      id: 5,
      title: "Product Management System",
      image: productManagementSysImg,
      category: "javascript",
      github: "https://github.com/ismail-1998/product-management-system",
      demo: "https://ismail-1998.github.io/product-management-system/",
    },
    {
      id: 6,
      title: "TRVL website",
      image: TRVLImg,
      category: "reactjs",
      github: "https://github.com/ismail-1998/TRVL",
      demo: "",
    },
    {
      id: 7,
      title: "MOGO Website - ITI project",
      image: mogoImg,
      category: "reactjs",
      github: "https://github.com/ismail-1998/iti-final-project",
      demo: "https://mogo-iti-final-project.netlify.app/",
    },
    {
      id: 8,
      title: "The Rose",
      image: theRoseImg,
      category: "html & css",
      github: "https://github.com/ismail-1998/the-rose-website",
      demo: "https://ismail-1998.github.io/the-rose-website/",
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
      <h2>Portfolio</h2>

      {/* filter buttons */}
      <div class="btn-container">
        {/* {console.log(categoryBtns)} */}
        {categoryBtns.map((category, index) => {
          return (
            <a
              onClick={() => btnEvents(category)}
              key={index}
              className="btn"
              data-id={category}
            >
              {category}
            </a>
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
              <h3>{title}</h3>
              <div className="projects_item_btns">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
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
