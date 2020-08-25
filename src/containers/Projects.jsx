import React from "react";
import "../assets/styles/containers/projects.css";

import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import { projectData } from "../assets/project";
import SecondaryText from "../components/atoms/text/SecondaryText";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import SafeContactAPi from "../assets/img/safecontact-api.png";
import JobsListing from "../assets/img/jobs-listing.jpg";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import PrimaryButton from "../components/atoms/btn/PrimaryButton";

const FeaturedProjects = () => {
  const img = [SocialMediaAPI, SafeContactAPi, JobsListing];
  return (
    <main className="Projects-container">
      <div className="Projects-title">
        <SecondaryText Content="Projects" FontSize="30px" />
      </div>
      <div className="Projects-featuredProject-container">
        <FeaturedProject
          ShortDescription={FeaturedProjectsData[0].littleDescription}
          Title={FeaturedProjectsData[0].title}
          Technologies={FeaturedProjectsData[0].technologies}
        />
      </div>
      <div className="Projects-Projects-container">
        {projectData.map((project) => {
          return (
            <Project
              Title={project.title}
              Technologies={project.technologies}
            />
          );
        })}
      </div>
      <div className="Projects-viewAll-btn">
        <a href="https://github.com/rogeliosamuel621" target="_blank">
          View all
        </a>
      </div>
    </main>
  );
};

export default FeaturedProjects;
