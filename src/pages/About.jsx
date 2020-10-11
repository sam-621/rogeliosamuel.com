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
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602429111/rik6ccrnwwy0iuycuyhc.svg"
            alt="Rogelio Samuel Moreno Corrales"
            width="200px"
            height="267px"
          />
        </div>
        <Description
          content="Hello, I’m Rogelio Samuel Moreno Corrales, an university student 📘, i’m 18 years old, learning programm 💻 by myself.
I live in Culiacan, Mexico, I like videogames, Teach and spend time with my family and girlfirend. ."
        />
      </div>
      <AboutSkills />
      <Nav about={true} />
    </>
  );
};

export default About;
