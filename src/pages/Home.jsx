import React from 'react';

import {
  Header,
  Nav,
  ProjectHomeSection,
  AboutHomeSection,
  ContactHomeSection,
} from '../components/container/';

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <AboutHomeSection />
      <ProjectHomeSection />
      <ContactHomeSection />
      <Nav home={true} />
    </>
  );
};

export default Home;
