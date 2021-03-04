import React from 'react';
import { Nav, NavDesktop } from '../containers';

const About = () => {
  return (
    <>
      {screen.width >= 1024 ? <NavDesktop /> : null}
      <h1 style={{ textAlign: 'center', color: 'white' }}>Coming soon :D</h1>
      {screen.width < 1024 ? <Nav inAboutMe={true} /> : null}
    </>
  );
};

export default About;
