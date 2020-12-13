import React, { useEffect } from 'react';

import { Header, Skills, Contact, NavBottom } from '../containers/';
import { FooterText } from '../atoms/';

const Home = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Header />
      <Skills />
      <Contact />
      <NavBottom />
      <FooterText />
    </>
  );
};

export default Home;
