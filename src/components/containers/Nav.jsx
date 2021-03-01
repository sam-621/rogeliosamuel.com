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
      <div className="NavDesktop-left">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1608145205/My%20Website/myLogo_hc28py.svg"
          alt="Rogelio Samuel icon"
        />
      </div>
      <div className="NavDesktop-right">
        <a href="" className="NavDesktop-right-blog">
          Blog
        </a>
        <Link to="About" className="NavDesktop-right-about">
          About
        </Link>
        <PrimaryButton text="Projects" url="projects" />
      </div>
    </nav>
  );
};
export { Nav, NavDesktop };
