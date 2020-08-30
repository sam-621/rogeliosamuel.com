import React from "react";
import "../../assets/styles/molecules/project.css";

import PrimaryLink from "../atoms/btn/PrimaryLink";

const Project = ({ ProjectTitle, Description, ID }) => {
  return (
    <div className="Project-container">
      <div className="Project-title">
        <h2>{ProjectTitle}</h2>
      </div>
      <div className="project-description">
        <p>{Description}</p>
      </div>
      <div className="project-btn">
        <PrimaryLink Content="Details" Url={`/${ID}`} />
      </div>
    </div>
  );
};

export default Project;
