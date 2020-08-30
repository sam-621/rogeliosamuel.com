import React from "react";

import Nav from "../components/containers/Nav";
import ProjectHero from "../components/containers/ProjectHero";
import { useParams } from "react-router-dom";

const AboutProject = () => {
  const { projectID } = useParams();

  return (
    <>
      <Nav />
      <ProjectHero ID={projectID} />
    </>
  );
};

export default AboutProject;
