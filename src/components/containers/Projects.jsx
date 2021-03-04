import React from 'react';
import '../../styles/containers/projects.css';
import { ProjectsData } from '../../assets/Projects';
import { Title } from '../atoms';
import { Project } from '../molecules';

const Projects = () => {
  return (
    <main className="Projects">
      <div className="Projects-title">
        <Title title="Projects" />
      </div>
      <div className="Projects-content">
        {ProjectsData.map((project) => {
          return (
            <Project
              title={project.title}
              img={project.image}
              repo={project.Repo}
              description={project.Description}
              demo={project.demo}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
