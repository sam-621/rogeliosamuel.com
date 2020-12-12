import React, { useContext } from 'react';
import '../../styles/pages/Contact.css';

import { FooterText, SocialIcons } from '../atoms';
import { TitleMobile, ContactInfo } from '../molecules';
import { NavBottom } from '../containers';
import ColorTheme from '../../context/ColorTheme';
import ContactBlue from '../../assets/img/contactBlue.svg';
import ContactGreen from '../../assets/img/contactGreen.svg';

const Contact = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <>
      <TitleMobile />
      <main className="Contact-content-page">
        <div className="Contact-illustration-container">
          <img
            src={theme ? ContactBlue : ContactGreen}
            alt="Contact illustration"
            width="228px"
            height="170px"
          />
        </div>
        <ContactInfo />
        <SocialIcons />
      </main>
      <FooterText />
      <NavBottom />
    </>
  );
};

export default Contact;
