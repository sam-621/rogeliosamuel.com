import React, { useState } from 'react';
import '../../styles/containers/nav.css';

import UserIcon from '../../assets/img/user.svg';
import UserIconBlue from '../../assets/img/userBlue.svg';
import Laptop from '../../assets/img/laptop.svg';
import LaptopBlue from '../../assets/img/LabtopBlue.svg';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../atoms';

const Nav = ({ inPortfolio, inAboutMe }) => {
  return (
    <nav className="Nav">
      <Link to="/portfolio" className="Nav-left">
        <img src={inPortfolio ? LaptopBlue : Laptop} alt="Laptop icon" />
        <p>Portfolio</p>
      </Link>
      <div className="Nav-center">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg"
          alt="Rogelio Samuel icon"
        />
      </div>
      <Link to="/about" className="Nav-right">
        <img src={inAboutMe ? UserIconBlue : UserIcon} alt="User icon" />
        <p>About me</p>
      </Link>
    </nav>
  );
};

const NavDesktop = () => {
  return (
    <nav className="NavDesktop">
      <Link to="/" className="NavDesktop-left">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg"
          alt="Rogelio Samuel icon"
        />
      </Link>
      <div className="NavDesktop-right">
        {/* <a
          href="https://dev.to/rogeliosamuel621"
          target="_blank"
          rel="noreferrer"
          className="NavDesktop-right-blog"
        >
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="rogeliosamuel621's DEV Community Profile"
            height="30"
            width="30"
          />
        </a> */}
        <Link to="/About" className="NavDesktop-right-about">
          About
        </Link>
        <PrimaryButton text="Projects" url="portfolio" />
      </div>
    </nav>
  );
};
export { Nav, NavDesktop };
