import React from 'react';
import { Helmet } from 'react-helmet';

import { Nav, Hero, BlogSection } from '../containers/';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Nav />
      <Hero />
      <BlogSection />
    </>
  );
};

export default Home;
