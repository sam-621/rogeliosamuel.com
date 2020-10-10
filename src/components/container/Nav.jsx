import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/containers/nav.css';

import HomeIcon from '../../assets/img/home.svg';
import HomeIconGreen from '../../assets/img/home-green.svg';
import UserIcon from '../../assets/img/user.svg';
import UserIconGreen from '../../assets/img/user-green.svg';
import MailIcon from '../../assets/img/mailto.svg';
import MailIconGreen from '../../assets/img/mail-green.svg';
import { Description } from '../../components/atoms/';

const Nav = ({ home, about, contact }) => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <div className="Nav-Image-Container">
          <img
            src={home ? HomeIconGreen : HomeIcon}
            alt="home icon"
            width="30"
            height="30"
          />
        </div>
        <p style={home ? { color: '#00C58E' } : { color: '#c4c4c4' }}>Home</p>
      </Link>
      <Link to="/about">
        <div className="Nav-Image-Container">
          <img
            src={about ? UserIconGreen : UserIcon}
            alt="user icon"
            width="30"
            height="30"
          />
        </div>
        <p style={about ? { color: '#00C58E' } : { color: '#c4c4c4' }}>About</p>
      </Link>
      <Link to="/contact">
        <div className="Nav-Image-Container">
          <img
            src={contact ? MailIconGreen : MailIcon}
            alt="Mail icon"
            width="30"
            height="30"
          />
        </div>
        <p style={contact ? { color: '#00C58E' } : { color: '#c4c4c4' }}>
          Contact
        </p>
      </Link>
    </nav>
  );
};

export default Nav;
