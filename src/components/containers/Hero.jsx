import React from 'react';
import '../../styles/containers/hero.css';
import { Link } from 'react-router-dom';

import { SocialIcons } from '../molecules/';
import { PrimaryButton } from '../atoms/';

const Hero = () => {
  return (
    <header className="Hero">
      <div className="Hero-content">
        <h1>Rogelio Samuel</h1>
        <p>
          Un backend developer que le encanta crear sistemas del lado del
          servidor y experimentaqr con diferentes tecnologías
        </p>
        <div className="Hero-content-actions">
          <PrimaryButton text="Projects" url="/portfolio" />
          <Link to="/about" className="Hero-content-actions-about">
            About me
          </Link>
        </div>
        <div className="Hero-content-links">
          <SocialIcons />
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Hero;
