import React, { useContext } from 'react';
import '../../styles/pages/Home.css';
import ColorTheme from '../../context/ColorTheme';

const Home = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  let themeColor = theme ? 'White' : 'Dark';

  function changeTheme() {
    setTheme(!theme);
  }

  return (
    <main className={`${themeColor}Mode`}>
      <h1 className={`${themeColor}`}>Hello world from home</h1>
      <button onClick={changeTheme}>change theme</button>
    </main>
  );
};

export default Home;
