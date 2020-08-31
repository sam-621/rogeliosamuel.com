import React from "react";
import "../../assets/styles/containers/skills.css";

import TitleSection from "../molecules/SectionTitle";
import Node from "../../assets/img/node-js.svg";
import react from "../../assets/img/react-brands.svg";
import js from "../../assets/img/js.svg";
import MySQL from "../../assets/img/mysql.svg";
import Typescript from "../../assets/img/typescript.svg";
import Webpack from "../../assets/img/webpack.svg";

const Skills = () => {
  const techIcons = [
    { icon: Node, title: "Node.js" },
    { icon: Typescript, title: "Typescript" },
    { icon: MySQL, title: "MySQL" },
    { icon: react, title: "React.js" },
    { icon: js, title: "javascript" },
    { icon: Webpack, title: "Webpack" },
  ];

  return (
    <section className="Skills-container">
      <TitleSection title="Skills" />
      <div className="Skills-Technologies-container">
        {techIcons.map((icon, index) => {
          return (
            <img
              key={index}
              src={icon.icon}
              alt="TechIcon"
              title={icon.title}
              width="25px"
              height="25px"
            />
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
