import React from 'react';
import '../../assets/styles/containers/header.css';

import { Hero, MyNameHeder } from '../molecules/';

const Header = () => {
  return (
    <header className="Header">
      <MyNameHeder />
      <Hero />
    </header>
  );
};

export default Header;
