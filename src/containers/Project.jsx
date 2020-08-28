import React from "react";
import "../assets/styles/containers/project.css";

import Subtitles from "../components/atoms/text/Subtitles";
import Node from "../assets/img/node-js.svg";
import react from "../assets/img/react-brands.svg";
import js from "../assets/img/js.svg";
import MySQL from "../assets/img/mysql.svg";
import Typescript from "../assets/img/typescript.svg";
import Webpack from "../assets/img/webpack.svg";
import PrimaryButton from "../components/atoms/btn/PrimaryButton";
import SecondaryButton from "../components/atoms/btn/SecondaryButton";
import { Link } from "react-router-dom";

const Project = ({ Title, Technologies, Repo, ID }) => {
  console.log(ID);
  const techIcons = [Node, Typescript, MySQL, react, js, Webpack];
  return (
    <div className="Project">
      <div className="Project-title">
        <Subtitles Content={Title} />
      </div>
      <div className="Project-techIcons">
        {Technologies.map((technologie, index) => {
          return (
            <img
              key={index}
              src={techIcons[technologie.icon]}
              alt="SocialMedia-API image"
              width="30px"
              height="30px"
              title={technologie.title}
            />
          );
        })}
      </div>
      <div className="Project-button">
        <Link to={`/${ID}`}>
          <PrimaryButton Content="Details" />
        </Link>
        <SecondaryButton Content="Code" url={Repo} />
      </div>
    </div>
  );
};

export default Project;
