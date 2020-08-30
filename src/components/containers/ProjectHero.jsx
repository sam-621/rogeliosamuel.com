import React from "react";
import "../../assets/styles/containers/ProjectHero.css";

import ProjectOptions from "../../components/molecules/ProjectOptions";
import { ProjectsData } from "../../assets/Projects";
import SocialMediaAPI from "../../assets/img/SocialMedia-API.png";
import JobsListing from "../../assets/img/jobs-listing.jpg";
import SafeContactsAPI from "../../assets/img/safecontact-api.png";

const ProjectHero = ({ ID }) => {
  const projectsImages = [SocialMediaAPI, JobsListing, SafeContactsAPI];

  return (
    <>
      <ProjectOptions
        title={ProjectsData[ID].title}
        demoURL={ProjectsData[ID].demo}
        CodeURL={ProjectsData[ID].Repo}
      />
      <div className="ProjectHero-img">
        <img
          src={projectsImages[ID]}
          alt="Project image"
          width="250"
          height="104.59"
        />
      </div>
    </>
  );
};

export default ProjectHero;
