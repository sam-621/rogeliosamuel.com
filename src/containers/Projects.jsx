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
          ID={FeaturedProjectsData[0].ID}
          ShortDescription={FeaturedProjectsData[0].littleDescription}
          Title={FeaturedProjectsData[0].title}
          Technologies={FeaturedProjectsData[0].technologies}
          Repo={FeaturedProjectsData[0].Repo}
        />
      </div>
      <div className="Projects-Projects-container">
        {projectData.map((project) => {
          return (
            <Project
              key={project.ID}
              Title={project.title}
              Technologies={project.technologies}
              Repo={project.Repo}
              ID={project.ID}
            />
          );
        })}
      </div>
      <div className="Projects-viewAll-btn">
        <a
          href="https://github.com/rogeliosamuel621?tab=repositories"
          target="_blank"
        >
          View all
        </a>
      </div>
    </main>
  );
};

export default FeaturedProjects;
