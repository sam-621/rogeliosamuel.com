import React from 'react';

import { Nav } from '../components/container/';

const Projects = () => {
  return (
    <>
      <h1 style={{ color: 'white' }}>Projects</h1>
      <Nav projects={true} />
    </>
  );
};

export default Projects;
