import React, { useContext } from 'react';
import '../../styles/pages/Home.css';

import ColorTheme from '../../context/ColorTheme.js';
import { TitleMobile } from '../molecules/';

const Home = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';

  return (
    <>
      <TitleMobile />
    </>
  );
};

export default Home;
