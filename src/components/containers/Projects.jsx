import React from "react";
import "../../assets/styles/containers/projects.css";

import FeaturedProject from "../molecules/FeaturedProject";
import { ProjectsData } from "../../assets/Projects";
import Title from "../atoms/text/Title";
import Project from "../molecules/Project";

const Projects = () => {
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
      <div className="Projects-boring">
        {ProjectsData.map((project) =>
          project.ID === 0 ? null : (
            <Project
              key={project.ID}
              ProjectTitle={project.title}
              Description={project.littleDescription}
              ID={project.ID}
            />
          )
        )}
      </div>
      <div className="Project-viewAll-container">
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

export default Projects;
