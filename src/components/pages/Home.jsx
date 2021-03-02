import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Nav,
  Hero,
  BlogSection,
  ProjectSection,
  ContactSection,
} from '../containers/';
import { NavDesktop } from '../containers/Nav';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <Hero />
      <BlogSection />
      <ProjectSection />
      <ContactSection />
      {screen.width < 1024 ? <Nav /> : null}
    </>
  );
};

export default Home;
