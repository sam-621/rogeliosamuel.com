import React from 'react';
import '../../assets/styles/containers/nav.css';

import HomeIcon from '../../assets/img/home.svg';
import UserIcon from '../../assets/img/user.svg';
import MailIcon from '../../assets/img/mailto.svg';
import { Description } from '../../components/atoms/';

const Nav = () => {
  return (
    <nav className="NavBar">
      <div>
        <div className="Nav-image-container">
          <img src={HomeIcon} alt="" width="30" height="30" />
        </div>
        <Description content="Home" />
      </div>
      <div>
        <div className="Nav-image-container">
          <img src={UserIcon} alt="" width="30" height="30" />
        </div>
        <Description content="About" />
      </div>
      <div>
        <div className="Nav-image-container">
          <img src={MailIcon} alt="" width="30" height="30" />
        </div>
        <Description content="Contact" />
      </div>
    </nav>
  );
};

export default Nav;
