import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import '../../styles/pages/AboutMe.css';

import { TitleMobile } from '../molecules';
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
        <meta
          name="description"
          content="Here you can find a text that explains who am i what i do and how i do"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rogeliosamuel621" />
        <meta name="twitter:title" content="Rogelio Samuel About me" />
        <meta
          name="twitter:description"
          content="Here you can find a text that explains who am i what i do and how i do"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1607875701/My%20Website/my_image_oqkwgf.png"
        />
        <title>Rogelio Samuel | About</title>
      </Helmet>
      <TitleMobile />
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
