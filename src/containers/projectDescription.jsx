import React from "react";
import "../assets/styles/containers/aboutProject.css";
import { Link } from "react-router-dom";

import Node from "../assets/img/node-js.svg";
import react from "../assets/img/react-brands.svg";
import js from "../assets/img/js.svg";
import Webpack from "../assets/img/webpack.svg";
import MySQL from "../assets/img/mysql.svg";
import Typescript from "../assets/img/typescript.svg";
import JobsListing from "../assets/img/jobs-listing.jpg";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import SafeContactsAPI from "../assets/img/safecontact-api.png";
import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import gitHub from "../assets/img/github.svg";
import demoIcon from "../assets/img/demo.svg";
import BackArrow from "../assets/img/back.svg";

const ProjectDescription = ({ ID }) => {
  const techIcons = [Node, Typescript, MySQL, react, js, Webpack];
  const img = [SocialMediaAPI, SafeContactsAPI, JobsListing];

  return (
    <main className="AboutProject-container">
      <div className="Hero-project">
        <Link to="/" className="Back">
          <img src={BackArrow} alt="" width="30px" height="30px" />
        </Link>
        <div className="AboutProjects-options">
          <h1>{FeaturedProjectsData[ID].title}</h1>

          <div className="Project-options-links">
            {/*Project code*/}
            <div className="Project-options-help">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={FeaturedProjectsData[ID].Repo}
                className="github-code"
              >
                <p>Project code </p>
                <img src={gitHub} alt="" width="30px" height="30px" />
              </a>
              {/*Project demo*/}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={FeaturedProjectsData[ID].demo}
                className="Project-demo"
              >
                <p>Project demo</p>
                <img src={demoIcon} alt="" width="30px" height="30px" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Project-image">
        <img src={img[ID]} alt="" width="700px" height="360px" />
      </div>
      <div className="About-project">
        <div>
          <h2>Description</h2>
          <p>{FeaturedProjectsData[ID].littleDescription}</p>
        </div>
        <div>
          <h2>Features</h2>
          {FeaturedProjectsData[ID].features.map((feature, index) => {
            return (
              <ul key={index}>
                <li>{feature}</li>
              </ul>
            );
          })}
        </div>
        <div className="Tech-icons">
          <h2>Technologies</h2>
          {FeaturedProjectsData[ID].technologies.map((tech, index) => {
            return (
              <img
                src={techIcons[tech.icon]}
                alt=""
                width="50px"
                height="50px"
                key={index}
                title={tech.title}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProjectDescription;
