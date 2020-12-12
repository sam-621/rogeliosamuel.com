import React, { useContext } from 'react';

import ColorTheme from '../../context/ColorTheme';
import DarkIcon from '../../assets/img/dark.svg';
import LightIcon from '../../assets/img/light.svg';

const SwitcherTheme = () => {
  const { theme, setTheme } = useContext(ColorTheme);

  function changeColorTheme() {
    setTheme(!theme);
  }

  return (
    <img
      style={{
        transition: 'all 0.25s linear',
        cursor: 'pointer',
        marginRight: '10px',
        position: 'fixed',
        right: '0',
      }}
      src={theme ? DarkIcon : LightIcon}
      alt="Switcher theme icon"
      onClick={changeColorTheme}
    />
  );
};

export default SwitcherTheme;
