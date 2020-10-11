import React from 'react';

import { Header, Nav, FeaturedProjects } from '../components/container/';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <FeaturedProjects />
      <Nav home={true} />
    </>
  );
};

export default Home;
