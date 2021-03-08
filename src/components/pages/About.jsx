import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Nav, NavDesktop, AboutContent } from '../containers';

const About = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | About</title>
        <meta
          name="description"
          content="About rogelisoamuel621 here you can find my experience, what i'm doing and tastes"
        />
      </Helmet>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <AboutContent />
      {screen.width < 1024 ? <Nav inAboutMe={true} /> : null}
    </>
  );
};

export default About;
