import React from 'react';
import '../../styles/pages/Home.css';

import { Header, Skills, Contact } from '../containers/';

const Home = () => {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
