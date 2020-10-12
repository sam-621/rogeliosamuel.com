import React from 'react';

import {
  Header,
  Nav,
  ProjectHomeSection,
  AboutHomeSection,
} from '../components/container/';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <AboutHomeSection />
      <ProjectHomeSection />
      <Nav home={true} />
    </>
  );
};

export default Home;
