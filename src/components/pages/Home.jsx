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
      <Hero />
      <BlogSection />
      {/* <ProjectSection /> */}
      {/* <ContactSection /> */}
      <Nav />
    </>
  );
};

export default Home;
