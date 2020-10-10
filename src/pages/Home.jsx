import React from 'react';

import { Header, Nav, Projects } from '../components/container/';

const Home = () => {
  return (
    <>
      <Header />
      <Projects />
      <Nav home={true} />
    </>
  );
};

export default Home;
