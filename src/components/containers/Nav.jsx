import React, { useState } from 'react';
import '../../styles/containers/nav.css';

import UserIcon from '../../assets/img/user.svg';
import UserIconBlue from '../../assets/img/userBlue.svg';
import Laptop from '../../assets/img/laptop.svg';
import LaptopBlue from '../../assets/img/LabtopBlue.svg';
import { Link } from 'react-router-dom';

const Nav = ({ inPortfolio, inAboutMe }) => {
  return (
    <nav className="Nav">
      <Link to="/portfolio" className="Nav-left">
        <img src={inPortfolio ? LaptopBlue : Laptop} alt="Laptop icon" />
        <p>Portfolio</p>
      </Link>
      <div className="Nav-center">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1611592451/r0ij5hsqnafywkqopyqw.png"
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

export default Nav;
