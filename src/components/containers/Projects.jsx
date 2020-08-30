import React from "react";
import "../../assets/styles/containers/projects.css";

import FeaturedProject from "../molecules/FeaturedProject";
import { ProjectsData } from "../../assets/Projects";
import Title from "../atoms/text/Title";

const Project = () => {
  return (
    <main className="Projects-container">
      <div className="Projects-title">
        <hr />
        <Title Center={false} Content="Projects" />
      </div>
      <FeaturedProject
        FeaturedProjectTitle={ProjectsData[0].title}
        ID={ProjectsData[0].ID}
      />
      <h1>hi</h1>
      <h1>hi</h1>
      <h1>hi</h1>
    </main>
  );
};

export default Project;
