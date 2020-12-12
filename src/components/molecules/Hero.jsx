import React, { useContext } from 'react';
import '../../styles/molecules/Hero.css';

import { SocialIcons, MyProfilePic } from '../atoms/';

import ColorTheme from '../../context/ColorTheme';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <section className="Hero">
      <div className="Hero-hero">
        <MyProfilePic />
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
