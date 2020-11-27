import React from 'react';
import '../../../assets/styles/containers/aboutMe.css';

import { Description } from '../../atoms';

const AboutMe = () => {
  return (
    <div className="About-Me-Container">
      <div className="About-Me-img">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605650225/My%20Website/lwzhs8kdvhersxmxw3hd.svg"
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
  );
};

export default AboutMe;
