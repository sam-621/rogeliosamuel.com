import React from "react";
import "../../assets/styles/molecules/project.css";

import JobsListing from "../../assets/img/jobs-listing.jpg";
import SafeContactsAPI from "../../assets/img/safecontact-api.png";
import PrimaryLink from "../atoms/btn/PrimaryLink";

const Project = ({ ProjectTitle, Description, ID }) => {
  const projectsImages = [null, JobsListing, SafeContactsAPI];
  return (
    <div className="Project-container">
      <div className="Project-title">
        <h2>{ProjectTitle}</h2>
      </div>
      <div className="project-description">
        <img
          src={projectsImages[ID]}
          alt="Project image"
          width="250px"
          height="104.59px"
        />
      </div>
      <div className="project-btn">
        <PrimaryLink Content="Details" Url={`/${ID}`} />
      </div>
    </div>
  );
};

export default Project;
