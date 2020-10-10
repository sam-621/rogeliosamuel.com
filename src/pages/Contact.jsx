import React from 'react';
import '../assets/styles/pages/contact.css';

import { MyNameHeder } from '../components/molecules/';
import { Nav, ContactInfo } from '../components/container/';
import ContactIllustration from '../assets/img/Contact-header.svg';

const Contact = () => {
  return (
    <>
      <MyNameHeder />
      <div className="Contact-illustration-container">
        <img
          src={ContactIllustration}
          alt="Contact illustration"
          width="228px"
          height="170px"
        />
      </div>
      <ContactInfo />
      <Nav contact={true} />
    </>
  );
};

export default Contact;
