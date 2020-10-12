import React from 'react';
import '../../assets/styles/containers/projectsContainer.css';

import { ProjectsData } from '../../assets/Projects.js';
import { OneProject } from '../molecules';

const ProjectsContainer = () => {
  return (
    <div className="ProjectsContainer-project-container">
      {ProjectsData.map((project) => (
        <OneProject
          key={project.ID}
          projectTitle={project.title}
          projectImage={project.image}
          projectDescription={project.Description}
          projectCode={project.Repo}
          projectDemo={project.demo}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
