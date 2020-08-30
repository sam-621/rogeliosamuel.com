import React from "react";
import "../../assets//styles/molecules/FeaturedProject.css";

import SocialMediaAPI from "../../assets/img/SocialMedia-API.png";
import JobsListing from "../../assets/img/jobs-listing.jpg";
import SafeContactsAPI from "../../assets/img/safecontact-api.png";
import PrimaryLink from "../atoms/btn/PrimaryLink";

const FeaturedProject = ({ FeaturedProjectTitle, ID }) => {
  console.log(FeaturedProjectTitle);
  const projectsImages = [SocialMediaAPI, JobsListing, SafeContactsAPI];

  return (
    <div className="FeaturedProject-container">
      <div className="FeaturedProject-title">
        <h2>{FeaturedProjectTitle}</h2>
      </div>
      <div className="FeaturedProject-img">
        <img
          src={projectsImages[ID]}
          alt="SocialMedia-API"
          width="250px"
          height="104.59px"
        />
      </div>
      <div className="FeaturedProject-btn">
        <PrimaryLink Content="Details" Url={`/${ID}`} />
      </div>
    </div>
  );
};

export default FeaturedProject;
