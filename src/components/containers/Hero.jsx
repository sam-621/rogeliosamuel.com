import React from 'react';
import '../../styles/containers/hero.css';
import { Link } from 'react-router-dom';

import { SocialIcons } from '../molecules/';
import { PrimaryButton } from '../atoms/';

const Hero = () => {
  return (
    <header className="Hero">
      <h1>Rogelio Samuel</h1>
      <p>
        Un backend developer que le encanta crear sistemas del lado del servidor
        y experimentaqr con diferentes tecnologías
      </p>
      <div className="Hero-actions">
        <PrimaryButton text="Projects" url="/portfolio" />
        <Link to="/about" className="Hero-actions-about">
          About me
        </Link>
      </div>
      <div className="Hero-links">
        <SocialIcons />
      </div>
    </header>
  );
};

export default Hero;
