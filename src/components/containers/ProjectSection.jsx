import React from 'react';
import { Link } from 'react-router-dom';

import { Title } from '../atoms';

const ProjectSection = () => {
  return (
    <section>
      <div>
        <Title title="Projects" />
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
