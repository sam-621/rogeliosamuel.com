import React from 'react';
import { Helmet } from 'react-helmet';

import { Nav } from '../containers/';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Nav />
    </>
  );
};

export default Home;
