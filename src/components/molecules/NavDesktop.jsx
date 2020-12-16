import React, { useContext } from 'react';
import '../../styles/molecules/NavDesktop.css';
import { Link } from 'react-router-dom';
import ColorTheme from '../../context/ColorTheme';

import { SwitcherTheme, MyName, BlogLink } from '../atoms';

const NavDesktop = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <nav className={`NavDesktop-${color} NavDesktop`}>
      <MyName />
      <div className="Nav-Desktop-right">
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link
          to="/Projects"
          className={`NavDesktop-Project-${color} NavDesktop-Project`}
        >
          Project
        </Link>
        <BlogLink />
        <SwitcherTheme />
      </div>
    </nav>
  );
};

export default NavDesktop;
