import React from 'react';
import '../../styles/containers/projectSection.css';

import { TitleLeft, PrimaryButton } from '../atoms';
import { Project } from '../molecules';

const ProjectSection = () => {
  return (
    <section className="ProjectSection">
      <div className="ProjectSection-left">
        <TitleLeft title="Projects" position="left" />
        <p>
          I love programming, i programming every day and a way to justify it is
          building projects
        </p>
        <PrimaryButton text="Projects" url="projects" />
      </div>
      <Project />
    </section>
  );
};

export default ProjectSection;
