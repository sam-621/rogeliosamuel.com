import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Nav, NavDesktop, AboutContent } from '../containers';

const About = () => {
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | About</title>
      </Helmet>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <AboutContent />
      {screen.width < 1024 ? <Nav inAboutMe={true} /> : null}
    </>
  );
};

export default About;
