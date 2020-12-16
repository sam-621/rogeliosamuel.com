import React from 'react';

import { TitleMobile, Hero, NavDesktop } from '../molecules/';

const Header = () => {
  return (
    <header>
      {window.screen.width < 1024 ? <TitleMobile /> : <NavDesktop />}
      <Hero />
    </header>
  );
};

export default Header;
