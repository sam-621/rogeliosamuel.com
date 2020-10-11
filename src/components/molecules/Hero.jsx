import React from 'react';
import '../../assets/styles/molecules/hero.css';

import { Title } from '../atoms/';

const Hero = () => {
  return (
    <>
      <div className="Hero-Text">
        <Title content="Hi!, I’m a backend developer. Web development" />
      </div>
      <div className="Hero-Illustration">
        <div className="Illustration-container">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602359244/lm1crlv6n3wvgvbhtrqq.svg"
            alt="Hero illustration"
            width="228"
            height="170"
          />
        </div>
        <p className="Hero-Description">
          Self-taught programmer who is always <strong>learning</strong> and
          open to working with other people. <br /> <br /> I mostly work with{' '}
          <strong>MERN stack</strong>, but also i work with MySQL or Java.
        </p>
      </div>
    </>
  );
};

export default Hero;
