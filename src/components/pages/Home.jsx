import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
  Header,
  Skills,
  Contact,
  NavBottom,
  RecentBlogs,
} from '../containers/';
import { FooterText } from '../atoms/';

const Home = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Header />
      <RecentBlogs />
      <Skills />
      <Contact />
      <NavBottom />
      <FooterText />
    </>
  );
};

export default Home;
