import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/containers/nav.css';

import HomeIcon from '../../assets/img/home.svg';
import UserIcon from '../../assets/img/user.svg';
import MailIcon from '../../assets/img/mailto.svg';
import { Description } from '../../components/atoms/';

const Nav = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <div className="Nav-Image-Container">
          <img src={HomeIcon} alt="" width="30" height="30" />
        </div>
        <Description content="Home" />
      </Link>
      <Link to="/about">
        <div className="Nav-Image-Container">
          <img src={UserIcon} alt="" width="30" height="30" />
        </div>
        <Description content="About" />
      </Link>
      <Link to="/contact">
        <div className="Nav-Image-Container">
          <img src={MailIcon} alt="" width="30" height="30" />
        </div>
        <Description content="Contact" />
      </Link>
    </nav>
  );
};

export default Nav;
