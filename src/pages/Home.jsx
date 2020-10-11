import React from 'react';

import { Header, Nav, Projects } from '../components/container/';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <Projects />
      <Nav home={true} />
    </>
  );
};

export default Home;
