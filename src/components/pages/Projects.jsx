import React, { useContext, useEffect } from 'react';
import '../../styles/pages/Projects.css';

import { FooterText, Title } from '../atoms';
import { TitleMobile } from '../molecules';
import { NavBottom, Project } from '../containers';
import { ProjectsData } from '../../assets/Projects';
import ColorTheme from '../../context/ColorTheme';

const Projects = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);

  return (
    <>
      <TitleMobile />
      <h1 className={`Projects-title-${color} Projects-title`}>Projects</h1>
      <main className="Projects-main">
        {ProjectsData.map((project) => {
          return (
            <Project
              key={project.ID}
              projectImage={project.image}
              projectTitle={project.title}
              projectDescription={project.Description}
              projectCode={project.Repo}
              projectDemo={project.demo}
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
