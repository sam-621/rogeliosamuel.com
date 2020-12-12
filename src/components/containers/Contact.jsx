import React, { useContext } from 'react';
import '../../styles/containers/Contact.css';
import { Link } from 'react-router-dom';

import { Title, SocialIcons } from '../atoms/';
import ColorTheme from '../../context/ColorTheme';
import ContactBlue from '../../assets/img/contactBlue.svg';
import ContactGreen from '../../assets/img/contactGreen.svg';

const Contact = () => {
  const { theme } = useContext(ColorTheme);
  const color = theme ? 'White' : 'Dark';
  return (
    <section className="Contact">
      <Title icon={1} title="Contact" />
      <div className="Contact-content">
        <div className="Contact-Illustration">
          <img
            src={theme ? ContactBlue : ContactGreen}
            alt="Contact illustration"
            width="228px"
            height="170px"
          />
        </div>
        <div className="Contact-Description">
          <p className={`Contact-Description-p-${color}`}>
            You can hire me on this social medias.
          </p>
          <SocialIcons />
          <div className="Contact-Link">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
