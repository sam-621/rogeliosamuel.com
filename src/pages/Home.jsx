import React from 'react';

import {
  Header,
  Nav,
  FeaturedProjects,
  AboutHomeSection,
} from '../components/container/';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <AboutHomeSection />
      <FeaturedProjects />
      <Nav home={true} />
    </>
  );
};

export default Home;
