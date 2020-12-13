import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <meta name="description" content="Here you can find my prjects" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rogeliosamuel621" />
        <meta name="twitter:title" content="Rogelio Samuel Portfolio" />
        <meta
          name="twitter:description"
          content="Here you can find my prjects"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1607875701/My%20Website/my_image_oqkwgf.png"
        />
        <title>Rogelio Samuel | Projects</title>
      </Helmet>
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
