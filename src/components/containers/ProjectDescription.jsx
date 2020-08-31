import React from "react";
import "../../assets/styles/containers/ProjectDescription.css";

import TitleSection from "../molecules/SectionTitle";
import Node from "../../assets/img/node-js.svg";
import react from "../../assets/img/react-brands.svg";
import js from "../../assets/img/js.svg";
import MySQL from "../../assets/img/mysql.svg";
import Typescript from "../../assets/img/typescript.svg";
import Webpack from "../../assets/img/webpack.svg";

const ProjectDescription = ({ Description, Features, Technologies }) => {
  const techIcons = [Node, Typescript, MySQL, react, js, Webpack];

  return (
    <section className="ProjectDescription-container">
      <div>
        <TitleSection title="Why did i do this project?" />
        <p>{Description}</p>
      </div>
      <div className="Features-container">
        <TitleSection title="Features" />
        {Features.map((feature, index) => {
          return (
            <ul key={index}>
              <li>{feature}</li>
            </ul>
          );
        })}
      </div>
      <div>
        <TitleSection title="Technologies" />
        <div className="ProjectDescription-img">
          {Technologies.map((tech, index) => {
            return (
              <img
                key={index}
                src={techIcons[tech.icon]}
                alt=""
                width="35px"
                height="35px"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
