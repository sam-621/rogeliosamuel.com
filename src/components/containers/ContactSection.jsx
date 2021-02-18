import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/containers/contactSection.css';

import { TitleRight } from '../atoms';
import { SocialIcons } from '../molecules';

const ContactSection = () => {
  return (
    <section className="ContactSection">
      <div className="ContactSection-left">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1613527835/My%20Website/contact_pew7ci.svg"
          alt="Contact illustration"
        />
      </div>
      <div className="ContactSection-right">
        <TitleRight title="Contact" />
        <div className="ContactSection-right-p">
          <p>
            I like building projects with other people, and teach, so if you´d
            like to get in touch with me, these are some options.
          </p>
        </div>
        <div className="ContactSection-right-social">
          <SocialIcons />
          <Link to="/about" className="ContactSection-right-social-link">
            About me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
