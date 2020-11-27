import React from 'react';

import { Nav, AboutSkills, AboutMe, AboutTools } from '../components/container';
import { MyNameHeder } from '../components/molecules/';

const About = () => {
  window.scrollTo(0, 0);
  return (
    <section style={{ margin: '0 0 100px 0' }}>
      <MyNameHeder />
      <AboutMe />
      <AboutSkills />
      <AboutTools />
      <Nav about={true} />
    </section>
  );
};

export default About;
