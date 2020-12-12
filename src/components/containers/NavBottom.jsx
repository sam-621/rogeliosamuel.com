import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/containers/NavBottom.css';

import HomeIcon from '../../assets/img/home.svg';
import HomeIconGreen from '../../assets/img/home-green.svg';
import HomeIconBlue from '../../assets/img/homeBlue.svg';
import UserIcon from '../../assets/img/user.svg';
import UserIconGreen from '../../assets/img/user-green.svg';
import UserIconBlue from '../../assets/img/userBlue.svg';
import MailIcon from '../../assets/img/mailto.svg';
import MailIconGreen from '../../assets/img/mailGreen.svg';
import MailIconBlue from '../../assets/img/mailBlue.svg';
import Laptop from '../../assets/img/laptop.svg';
import LaptopGreen from '../../assets/img/laptop-green.svg';
import LaptopBlue from '../../assets/img/LabtopBlue.svg';
import ColorTheme from '../../context/ColorTheme';

const Nav = () => {
  const { pathname } = useLocation();
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  let correct;
  let correctColor;
  const icons = [
    HomeIcon,
    HomeIconGreen,
    HomeIconBlue,
    UserIcon,
    UserIconBlue,
    UserIconGreen,
    MailIcon,
    MailIconBlue,
    MailIconGreen,
    Laptop,
    LaptopBlue,
    LaptopGreen,
  ];
  switch (pathname) {
    case '/':
      if (theme) {
        correctColor = '#2F80ED';
        correct = 2;
      } else {
        correctColor = '#00C58E';
        correct = 1;
      }
      break;
    case '/about':
      if (theme) {
        correctColor = '#2F80ED';
        correct = 4;
      } else {
        correctColor = '#00C58E';
        correct = 5;
      }
      break;
    case '/contact':
      if (theme) {
        correctColor = '#2F80ED';
        correct = 7;
      } else {
        correctColor = '#00C58E';
        correct = 8;
      }
      break;
    case '/projects':
      if (theme) {
        correctColor = '#2F80ED';
        correct = 10;
      } else {
        correctColor = '#00C58E';
        correct = 11;
      }
      break;
  }
  return (
    <nav className={`NavBottom-${color} NavBottom`}>
      <Link to="/">
        <div className="Nav-Image-Container">
          <img
            src={pathname === '/' ? icons[correct] : HomeIcon}
            alt="home icon"
            width="30"
            height="30"
          />
        </div>
        <p
          style={
            pathname === '/'
              ? { transition: 'all 0.25s linear', color: correctColor }
              : { transition: 'all 0.25s linear', color: '#c4c4c4' }
          }
        >
          Home
        </p>
      </Link>
      <Link to="/projects">
        <div className="Nav-Image-Container">
          <img
            src={pathname === '/projects' ? icons[correct] : Laptop}
            alt="Laptop icon"
            width="30"
            height="30"
          />
        </div>
        <p
          style={
            pathname === '/projects'
              ? { transition: 'all 0.25s linear', color: correctColor }
              : { transition: 'all 0.25s linear', color: '#c4c4c4' }
          }
        >
          Projects
        </p>
      </Link>
      <Link to="/about">
        <div className="Nav-Image-Container">
          <img
            src={pathname === '/about' ? icons[correct] : UserIcon}
            alt="user icon"
            width="30"
            height="30"
          />
        </div>
        <p
          style={
            pathname === '/about'
              ? { transition: 'all 0.25s linear', color: correctColor }
              : { transition: 'all 0.25s linear', color: '#c4c4c4' }
          }
        >
          About
        </p>
      </Link>
      <Link to="/contact">
        <div className="Nav-Image-Container">
          <img
            src={pathname === '/contact' ? icons[correct] : MailIcon}
            alt="Mail icon"
            width="30"
            height="30"
          />
        </div>
        <p
          style={
            pathname === '/contact'
              ? { transition: 'all 0.25s linear', color: correctColor }
              : { transition: 'all 0.25s linear', color: '#c4c4c4' }
          }
        >
          Contact
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
