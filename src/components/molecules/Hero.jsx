import React from 'react';
import '../../assets/styles/molecules/hero.css';

import { Title } from '../atoms/';

const Hero = () => {
  return (
    <>
      <div className="Hero-Illustration">
        <div className="Hero-Text">
          <Title content="Hi!, I’m a backend developer. Web development" />
        </div>
        <div className="Illustration-container">
          <img
            src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605650686/wgfdtrsir8hgixfuio0m.svg"
            alt="Hero illustration"
            width="228"
            height="170"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
