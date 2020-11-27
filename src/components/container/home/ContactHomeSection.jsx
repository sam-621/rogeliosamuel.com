import React from 'react';
import '../../../assets/styles/containers/contactHomeSection.css';

import ContactIllustration from '../../../assets/img/Contact-header.svg';
import GitHubIcon from '../../../assets/img/normalGit.svg';
import TwitterIcon from '../../../assets/img/twitter.svg';
import EmailIcon from '../../../assets/img/normalMail.svg';
import { Link } from 'react-router-dom';

const ContactHomeSection = () => {
  return (
    <section className="ContactHomeSection">
      <div className="ContactHomeSection-Illustration">
        <img
          src={ContactIllustration}
          alt="Contact illustration"
          width="579px"
          height="359px"
        />
      </div>
      <div className="ContactHomeSection-Description">
        <h1>CONTACT</h1>
        <p>You can hire me on this social medias.</p>
        <div className="ContactHomeSection-Icons">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/rogeliosamuel621"
          >
            <img src={GitHubIcon} alt="Github icon" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://twitter.com/rogeliosamuel21"
          >
            <img src={TwitterIcon} alt="Twitter icon" />
          </a>
          <a rel="noreferrer" target="_blank" href="mailto:hello@sneyder.dev">
            <img src={EmailIcon} alt="Email icon" />
          </a>
        </div>
        <Link className="ContactHomeSection-Link" to="/contact">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default ContactHomeSection;
