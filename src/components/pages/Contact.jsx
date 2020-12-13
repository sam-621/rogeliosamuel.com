import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
  useEffect(() => window.scroll({ behavior: 'smooth', top: 0 }), []);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Here you can find my socials and get in touch with me"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@rogeliosamuel621" />
        <meta name="twitter:title" content="Rogelio Samuel Contact" />
        <meta
          name="twitter:description"
          content="Here you can find my socials and get in touch with me"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1607875701/My%20Website/my_image_oqkwgf.png"
        />
        <title>Rogelio Samuel | Contact</title>
      </Helmet>
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
