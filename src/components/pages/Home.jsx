import React from 'react';
import { Helmet } from 'react-helmet';

import {
  Nav,
  Hero,
  BlogSection,
  ProjectSection,
  ContactSection,
} from '../containers/';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Nav />
      <Hero />
      <BlogSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};

export default Home;
