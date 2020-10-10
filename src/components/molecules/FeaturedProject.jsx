import React from "react";
import "../../assets/styles/molecules/featuredProject.css";

import AuthApp from "../../assets/img/authapp.png";
import PrimaryLink from "../atoms/btn/PrimaryLink";

const FeaturedProject = ({ ProjectTitle, description, ID }) => {
  return (
    <div className="FeaturedProject-container">
      <div className="FeaturedProject-title">
        <h2>{ProjectTitle}</h2>
      </div>
      <div className="FeaturedProject-content-container">
        <div className="FeaturedProject-text-mediaquery">
          <p>{description}</p>
        </div>
        <div className="FeaturedProject-img">
          <img
            src={AuthApp}
            alt="Auth App project"
            width="250px"
            height="104.59px"
          />
        </div>
      </div>
      <div className="FeaturedProject-btn">
        <PrimaryLink Content="Details" Url={`/${ID}`} />
      </div>
    </div>
  );
};

export default FeaturedProject;
