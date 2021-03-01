import React from 'react';
import '../../styles/containers/contactSection.css';

import { PrimaryButton, Title, TitleRight } from '../atoms';
import { SocialIcons } from '../molecules';

const ContactSection = () => {
  return (
    <section className="ContactSection">
      <div className="ContactSection-text">
        <Title title="Contact" />
        <div className="ContactSection-text-p">
          <p>
            I like building projects with other people, and teach, so if you´d
            like to get in touch with me, these are some options.
          </p>
        </div>
        <div className="ContactSection-text-helper-mobile">
          <div className="ContactSection-text-social">
            <SocialIcons />
          </div>
          <div className="ContactSection-text-primary">
            <PrimaryButton text="About me" url="about" />
          </div>
        </div>
      </div>
      <div className="ContactSection-illustration">
        <img
          src="https://res.cloudinary.com/dnvp4s8pe/image/upload/v1613527835/My%20Website/contact_pew7ci.svg"
          alt="Contact illustration"
        />
      </div>
    </section>
  );
};

export default ContactSection;
