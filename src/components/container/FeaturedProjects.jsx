import React from 'react';
import '../../assets/styles/containers/featuredProjects.css';

import { FeaturedProjectsData } from '../../assets/FeaturedProjects.js';
import { FeaturedProject } from '../molecules';
import { Title, GreenText } from '../atoms';
import CodeIcon from '../../assets/img/code.svg';

const Projects = () => {
  return (
    <main className="FeaturedProjects">
      <div className="FeaturedProjects-Title">
        <Title content="FeaturedProjects" />
        <img src={CodeIcon} alt="Code icon" width="30px" height="30px" />
      </div>
      <div className="FeaturedProjects-project-container">
        {FeaturedProjectsData.map((project) => (
          <FeaturedProject
            key={project.ID}
            projectTitle={project.title}
            projectImage={project.image}
            projectDescription={project.Description}
            projectCode={project.Repo}
            projectDemo={project.demo}
          />
        ))}
      </div>
      <div className="FeaturedProjects-ViewAll">
        <GreenText content="View all" />
      </div>
    </main>
  );
};

export default Projects;
