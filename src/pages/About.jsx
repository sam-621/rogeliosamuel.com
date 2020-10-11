import React from 'react';
import '../assets/styles/pages/about.css';

import { Description } from '../components/atoms';
import { Nav, AboutSkills } from '../components/container';
import { MyNameHeder } from '../components/molecules/';

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <MyNameHeder />
      <div className="About-Me-Container">
        <div className="About-Me-img">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602367243/uzppnmocgmpx2mkyl1u7.jpg"
            alt="Rogelio Samuel Moreno Corrales"
            width="200px"
            height="267px"
          />
        </div>
        <Description content="Hi I’m Rogelio Samuel, self-taught programmer who is always learning and open to working with other people." />
      </div>
      <AboutSkills />
      <Nav about={true} />
    </>
  );
};

export default About;
