import React from 'react';
import '../../styles/containers/projectSection.css';

import { TitleLeft, PrimaryButton } from '../atoms';
import { Project } from '../molecules';

const ProjectSection = () => {
  return (
    <section className="ProjectSection">
      <div className="ProjectSection-text">
        <TitleLeft title="Projects" position="left" />
        <p>
          I love programming, i programming every day and a way to justify it is
          building projects
        </p>
        <div className="ProjectSection-text-primary">
          <PrimaryButton text="Projects" url="projects" />
        </div>
      </div>
      <div className="ProjectSection-project">
        <Project />
      </div>
    </section>
  );
};

export default ProjectSection;
