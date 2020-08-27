import React from "react";
import { useParams } from "react-router-dom";

import Nav from "../containers/Nav";
//Technologies icon

import ProjectDescription from "../containers/projectDescription";

const AboutProject = () => {
  const { projectID } = useParams();
  console.log(projectID);

  return (
    <>
      <Nav />
      <ProjectDescription ID={projectID} />
    </>
  );
};

export default AboutProject;
