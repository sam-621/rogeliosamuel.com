import React from 'react';
import '../../styles/containers/projectSection.css';
import { Link } from 'react-router-dom';

import { TitleLeft } from '../atoms';

const ProjectSection = () => {
  return (
    <section className="ProjectSection">
      <div className="ProjectSection-left">
        <TitleLeft title="Projects" position="left" />
        <p>
          I love programming, i programming every day and a way to justify it is
          building projects
        </p>
        <Link to="/projects">See all projects -{'>'}</Link>
      </div>
      <div></div>
    </section>
  );
};

export default ProjectSection;
