import React from "react";
import "../assets/styles/containers/project.css";

import Subtitles from "../components/atoms/text/Subtitles";
import Node from "../assets/img/node-js.svg";
import react from "../assets/img/react-brands.svg";
import js from "../assets/img/js.svg";
import MySQL from "../assets/img/mysql.svg";
import Typescript from "../assets/img/typescript.svg";
import Webpack from "../assets/img/webpack.svg";

const Project = ({ Title, Technologies }) => {
  const techIcons = [Node, Typescript, MySQL, react, js, Webpack];
  return (
    <div className="Project">
      <div className="Project-title">
        <Subtitles Content={Title} />
      </div>
      <div className="Project-techIcons">
        {Technologies.map((technologie) => {
          return (
            <img
              src={techIcons[technologie]}
              alt="SocialMedia-API image"
              width="30px"
              height="30px"
            />
          );
        })}
      </div>
      <div className="Project-button">
        <button>Details</button>
      </div>
    </div>
  );
};

export default Project;
