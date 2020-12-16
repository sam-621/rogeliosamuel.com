import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/pages/AboutMe.css';

import { TitleMobile, NavDesktop } from '../molecules';
import { FooterText, MyProfilePic } from '../atoms';
import { NavBottom } from '../containers';
import ColorTheme from '../../context/ColorTheme';

const AboutMe = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);

  return (
    <>
      <Helmet>
        <title>Rogelio Samuel | About</title>
      </Helmet>
      {window.screen.width < 1024 ? <TitleMobile /> : <NavDesktop />}
      <main className="AboutMe">
        <MyProfilePic />
        <p className={`AboutMe-Text-${color} AboutMe-Text`}>
          Hello, I’m Rogelio Samuel Moreno Corrales, an university student 📘,
          i’m 18 years old, learning programm 💻 by myself. <br /> <br /> I live
          in Culiacan, Mexico, I like videogames, Teach and spend time with my
          family and girlfirend.
        </p>
      </main>
      <FooterText />
      <NavBottom />
    </>
  );
};

export default AboutMe;
