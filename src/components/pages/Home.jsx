import React, { useContext } from 'react';
import '../../styles/pages/Home.css';
import ColorTheme from '../../context/ColorTheme';

const Home = () => {
  const { theme, setTheme } = useContext(ColorTheme);

  function changeTheme() {
    setTheme(!theme);
  }

  return (
    <main className={theme ? 'WhiteMode' : 'DarkMode'}>
      <h1
        className={theme ? 'White' : 'Dark'}
        // style={
        //   theme
        //     ? { color: 'white', transition: 'all 0.25s linear' }
        //     : { color: 'black', transition: 'all 0.25s linear' }
        // }
      >
        Hello world from home
      </h1>
      <button onClick={changeTheme}>change theme</button>
    </main>
  );
};

export default Home;
