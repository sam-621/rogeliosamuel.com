import React from "react";
import "../assets/styles/containers/FeaturedProjects.css";

import FeaturedProjectDescription from "../components/molecules/FeaturedProjectDescription";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";

const FeaturedProject = ({ Title, ShortDescription, Technologies, Repo }) => {
  return (
    <div className="FeaturedProject-container">
      <div>
        <FeaturedProjectDescription
          littleDescription={ShortDescription}
          technologies={Technologies}
          title={Title}
          Repo={Repo}
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
