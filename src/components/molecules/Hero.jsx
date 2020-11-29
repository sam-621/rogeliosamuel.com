import React, { useContext } from 'react';
import '../../styles/molecules/Hero.css';

import ColorTheme from '../../context/ColorTheme';
import TwitterIcon from '../../assets/img/twitterBlue.svg';
import MailToIcon from '../../assets/img/mailBlue.svg';
import GitIcon from '../../assets/img/githubBlue.svg';
import TwitterIconGreen from '../../assets/img/twitterGreen.svg';
import MailToIconGreen from '../../assets/img/mailGreen.svg';
import GitIconGreen from '../../assets/img/githubGreen.svg';
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
        <div className="Hero-content-links">
          <a target="_blank" href="https://twitter.com/rogeliosamuel21">
            <img
              src={theme ? TwitterIcon : TwitterIconGreen}
              alt="Twitter icon"
            />
          </a>
          <a target="_blank" href="#">
            <img src={theme ? MailToIcon : MailToIconGreen} alt="Email icon" />
          </a>
          <a target="_blank" href="https://github.com/rogeliosamuel621">
            <img src={theme ? GitIcon : GitIconGreen} alt="Github icon" />
          </a>
        </div>
      </div>
      <div className="Hero-button">
        <Link to="/projects">Projects</Link>
      </div>
    </section>
  );
};

export default Hero;
