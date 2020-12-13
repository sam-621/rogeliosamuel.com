import React from 'react';

import { Header, Skills, Contact, NavBottom } from '../containers/';
import { FooterText } from '../atoms/';

const Home = () => {
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
