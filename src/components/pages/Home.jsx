import React from 'react';
import '../../styles/pages/Home.css';

import { Header, Skills, Contact, NavBottom } from '../containers/';

const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
      <NavBottom />
    </>
  );
};

export default Home;
