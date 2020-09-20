import React from "react";
import "../../assets/styles/containers/projects.css";

import Project from "../molecules/project";
import FeaturedProject from "../molecules/FeaturedProject";
import { ProjectsData } from "../../assets/Projects";
import TitleSection from "../molecules/SectionTitle";

const Projects = () => {
  return (
    <main className="Projects-container">
      <TitleSection title="Projects" />
      <div className="Projects-project-container">
        <FeaturedProject
          ID={0}
          ProjectTitle={ProjectsData[0].title}
          description={ProjectsData[0].description}
        />
        <div className="NormalProjects-container">
          {ProjectsData.map((project, index) =>
            index === 0 ? null : (
              <Project
                key={project.ID}
                ProjectTitle={project.title}
                description={project.description}
                ID={project.ID}
              />
            )
          )}
        </div>
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
