import React from "react";

import Nav from "../components/containers/Nav";
import Footer from "../components/containers/Footer";
import ProjectHero from "../components/containers/ProjectHero";
import ProjectDescription from "../components/containers/ProjectDescription";
import { ProjectsData } from "../assets/Projects";
import { useParams } from "react-router-dom";

const AboutProject = () => {
  const { projectID } = useParams();

  return (
    <>
      <Nav />
      <ProjectHero ID={projectID} Data={ProjectsData} />
      <ProjectDescription
        Description={ProjectsData[projectID].description}
        Features={ProjectsData[projectID].features}
        Technologies={ProjectsData[projectID].technologies}
      />
      <Footer />
    </>
  );
};

export default AboutProject;
