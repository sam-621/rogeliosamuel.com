import React from "react";
import "../assets/styles/containers/FeaturedProjects.css";

import FeaturedProjectDescription from "../components/molecules/FeaturedProjectDescription";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import PrimaryButton from "../components/atoms/btn/PrimaryButton";
import SecondaryButton from "../components/atoms/btn/SecondaryButton";

const FeaturedProject = ({ Title, ShortDescription, Technologies }) => {
  return (
    <div className="FeaturedProject-container">
      <div>
        <FeaturedProjectDescription
          littleDescription={ShortDescription}
          technologies={Technologies}
          title={Title}
        />
      </div>
      <div className="FeaturedProject-img">
        <img
          src={SocialMediaAPI}
          alt="SocialMedia-API image"
          width="569px"
          height="300px"
        />
      </div>
    </div>
  );
};

export default FeaturedProject;
