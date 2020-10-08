import React from "react";
import "../../assets/styles/containers/ProjectHero.css";

import ProjectOptions from "../../components/molecules/ProjectOptions";
import AuthApp from "../../assets/img/authapp.png";
import imageUploader from "../../assets/img/image-uploader.jpg";
import JobsListing from "../../assets/img/jobs-listing.jpg";

const ProjectHero = ({ ID, Data }) => {
  const projectsImages = [AuthApp, imageUploader, JobsListing];

  return (
    <>
      <ProjectOptions
        title={Data[ID].title}
        demoURL={Data[ID].demo}
        CodeURL={Data[ID].Repo}
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
