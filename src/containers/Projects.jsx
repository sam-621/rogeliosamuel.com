import React, { useEffect } from "react";
import "../assets/styles/containers/projects.css";

import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import SecondaryText from "../components/atoms/text/SecondaryText";
import Arrow from "../components/atoms/img/Arrows";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import SafeContactAPi from "../assets/img/safecontact-api.png";
import JobsListing from "../assets/img/jobs-listing.jpg";
import FeaturedProject from "./FeaturedProject";

const FeaturedProjects = () => {
  const img = [SocialMediaAPI, SafeContactAPi, JobsListing];
  return (
    <main className="Projects-container">
      <div className="Projects-title">
        <SecondaryText Content="Projects" FontSize="30px" />
      </div>
      <div className="Projects-project-container">
        <FeaturedProject
          ShortDescription={FeaturedProjectsData[0].littleDescription}
          Title={FeaturedProjectsData[0].title}
          Technologies={FeaturedProjectsData[0].technologies}
        />
        <div className="Project"></div>
        <div className="Project"></div>
      </div>
    </main>
  );
};

export default FeaturedProjects;
