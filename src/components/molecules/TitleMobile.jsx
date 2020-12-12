import React, { useContext } from 'react';
import ColorTheme from '../../context/ColorTheme';
import '../../styles/molecules/TitleMobile.css';

import { MyName, SwitcherTheme } from '../atoms/';

const TitleMobile = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <div className={`TitleMobile TitleMobile-${color}`}>
      <MyName />
      <SwitcherTheme />
    </div>
  );
};

export default TitleMobile;
