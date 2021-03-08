import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
  Nav,
  Hero,
  BlogSection,
  ProjectSection,
  ContactSection,
  NavDesktop,
} from '../containers/';

const Home = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
        <meta
          name="description"
          content="rogelisoamuel621's website created in Reactjs where you can find my projects, experience and something about me"
        />
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
