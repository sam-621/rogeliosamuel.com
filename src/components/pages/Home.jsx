import React from 'react';
import { Helmet } from 'react-helmet';

import { Nav, Hero, Blogs } from '../containers/';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Nav />
      <Hero />
      <Blogs />
    </>
  );
};

export default Home;
