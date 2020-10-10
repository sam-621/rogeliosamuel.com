import React from 'react';
import '../../assets/styles/containers/header.css';

import HeaderIllustration from '../../assets/img/main-header.svg';
import { HomeHeader } from '../molecules/';

const Header = () => {
  return (
    <header className="Header">
      <HomeHeader />
      <div className="Header-Illustration">
        <img
          src={HeaderIllustration}
          alt="Header illustration"
          width="228"
          height="170"
        />
      </div>
    </header>
  );
};

export default Header;
