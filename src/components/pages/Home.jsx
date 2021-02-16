import React from 'react';
import { Helmet } from 'react-helmet';

import { Nav, Hero } from '../containers/';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Nav />
      <Hero />
    </>
  );
};

export default Home;
