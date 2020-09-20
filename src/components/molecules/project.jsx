import React from "react";
import "../../assets/styles/molecules/project.css";

import JobsListing from "../../assets/img/jobs-listing.jpg";
import SafeContactsAPI from "../../assets/img/safecontact-api.png";
import PrimaryLink from "../atoms/btn/PrimaryLink";

const Project = ({ ProjectTitle, description, ID }) => {
  const projectsImages = [null, JobsListing, SafeContactsAPI];

  return (
    <div className="Project-container">
      <div className="Project-title">
        <h2>{ProjectTitle}</h2>
      </div>
      <div className="Project-content-container">
        <div className="Project-img">
          <img
            src={projectsImages[ID]}
            alt="SocialMedia-API"
            width="250px"
            height="104.59px"
          />
        </div>
        <div className="Project-text-mediaquery">
          <p>{description}</p>
        </div>
      </div>
      <div className="Project-btn">
        <PrimaryLink Content="Details" Url={`/${ID}`} />
      </div>
    </div>
  );
};

export default Project;
