import React from 'react';
import '../../styles/pages/Projects.css';

import { FooterText } from '../atoms';
import { TitleMobile } from '../molecules';
import { NavBottom, Project } from '../containers';
import { ProjectsData } from '../../assets/Projects';

const Projects = () => {
  return (
    <>
      <TitleMobile />
      <main className="Projects-main">
        {ProjectsData.map((project) => {
          return (
            <Project
              key={project.ID}
              image={project.image}
              title={project.title}
            />
          );
        })}
      </main>
      <NavBottom />
      <FooterText />
    </>
  );
};

export default Projects;
