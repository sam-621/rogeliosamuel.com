import React from 'react';
import '../assets/styles/pages/projectsPage.css';

import { Title } from '../components/atoms';
import { Nav, ProjectsContainer } from '../components/container';
import { MyNameHeder } from '../components/molecules';
import CodeIcon from '../assets/img/code.svg';

const Projects = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <MyNameHeder />
      <div className="Projects-Title">
        <Title content="Projects" />
        <img src={CodeIcon} alt="Code icon" width="30px" height="30px" />
      </div>
      <ProjectsContainer />
      <Nav projects={true} />
    </>
  );
};

export default Projects;
