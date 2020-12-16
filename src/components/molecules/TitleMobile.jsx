import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/molecules/TitleMobile.css';

import { MyName, SwitcherTheme, BlogLink } from '../atoms/';

const TitleMobile = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <div className={`TitleMobile TitleMobile-${color}`}>
      <MyName />
      <div className="TitleMobile-right">
        <BlogLink />
        <SwitcherTheme />
      </div>
    </div>
  );
};

export default TitleMobile;
