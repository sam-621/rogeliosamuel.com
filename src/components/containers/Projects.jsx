import React from "react";
import "../../assets/styles/containers/projects.css";

import Project from "../molecules/project";
import { ProjectsData } from "../../assets/Projects";
import TitleSection from "../molecules/SectionTitle";

const Projects = () => {
  return (
    <main className="Projects-container">
      <TitleSection title="Projects" />
      <div className="Projects-project-container">
        {ProjectsData.map((project) => (
          <Project
            key={project.ID}
            ProjectTitle={project.title}
            description={project.description}
            ID={project.ID}
          />
        ))}
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
