import React, { useContext } from 'react';
import '../../styles/molecules/Hero.css';

import { SocialIcons } from '../atoms/';

import ColorTheme from '../../context/ColorTheme';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <section className="Hero">
      <div className="Hero-hero">
        <img
          className={`Hero-hero-img-${color}`}
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1605650225/My%20Website/lwzhs8kdvhersxmxw3hd.svg"
          alt="Rogelio Samuel photo"
          width="250px"
          height="256,73px"
        />
        <h1 className={`Hero-hero-h1-${color}`}>Web developer</h1>
      </div>
      <div className="Hero-content">
        <p className={`Hero-content-p-${color}`}>
          Reactjs <strong className={`Hero-strong-${color}`}>||</strong> Node.js{' '}
          <strong className={`Hero-strong-${color}`}>||</strong> MongoDB
        </p>
        <SocialIcons />
      </div>
      <div className="Hero-button">
        <Link to="/projects">Projects</Link>
      </div>
    </section>
  );
};

export default Hero;
