import React from "react";
import "../../assets//styles/molecules/FeaturedProject.css";

import Title from "../atoms/text/Title";
import SocialMediaAPI from "../../assets/img/SocialMedia-API.png";
import PrimaryLink from "../atoms/btn/PrimaryLink";

const FeaturedProject = ({ FeaturedProjectTitle, ID }) => {
  console.log(FeaturedProjectTitle);
  return (
    <div className="FeaturedProject-container">
      <div className="FeaturedProject-title">
        <h2>{FeaturedProjectTitle}</h2>
      </div>
      <div className="FeaturedProject-img">
        <img
          src={SocialMediaAPI}
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
