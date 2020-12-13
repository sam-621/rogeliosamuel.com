import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import { Header, Skills, Contact, NavBottom } from '../containers/';
import { FooterText } from '../atoms/';

const Home = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="My website created in Reactjs where you can find my projects, experience and something about me"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rogeliosamuel621" />
        <meta name="twitter:title" content="Rogelio Samuel website" />
        <meta
          name="twitter:description"
          content="Here you can find my projects, experience and something about me"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1607875701/My%20Website/my_image_oqkwgf.png"
        />
        <title>Rogelio Samuel | Home</title>
      </Helmet>
      <Header />
      <Skills />
      <Contact />
      <NavBottom />
      <FooterText />
    </>
  );
};

export default Home;
