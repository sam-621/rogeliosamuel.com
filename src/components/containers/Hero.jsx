import React from 'react';
import '../../styles/containers/hero.css';
import { Link } from 'react-router-dom';

import { SocialIcons } from '../molecules/';
import { PrimaryButton } from '../atoms/';
import HeroIllustration from '../../assets/img/hero.svg';

const Hero = () => {
  return (
    <header className="Hero">
      <div className="Hero-content">
        <h1>Rogelio Samuel</h1>
        <p>
          Backend developer. MERN stack. Always learning and open to working
          with other people.
        </p>
        <div className="Hero-content-actions">
          <PrimaryButton text="Projects" url="portfolio" />
          <Link to="/about" className="Hero-content-actions-about">
            About me
          </Link>
        </div>
        <div className="Hero-content-links">
          <SocialIcons />
        </div>
      </div>
      <div className="Hero-illustration">
        <img src={HeroIllustration} alt="Hero illustration" />
      </div>
    </header>
  );
};

export default Hero;
