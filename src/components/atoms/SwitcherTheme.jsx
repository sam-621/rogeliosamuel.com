import React, { useContext } from 'react';

import ColorTheme from '../../context/ColorTheme';
import DarkIcon from '../../assets/img/dark.svg';
import LightIcon from '../../assets/img/light.svg';

const SwitcherTheme = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'Dark' : 'White';

  function changeColorTheme() {
    setTheme(!theme);
  }

  return (
    <img
      style={{ transition: 'all 0.25s linear' }}
      src={theme ? DarkIcon : LightIcon}
      alt="Switcher theme icon"
      onClick={changeColorTheme}
    />
  );
};

export default SwitcherTheme;
