import React from "react";
import "../../assets/styles/containers/contact.css";

import TitleSection from "../molecules/SectionTitle";

import SocialIcons from "../atoms/btn/SocialIcons";

const Contact = () => {
  return (
    <section className="Contact-container">
      <TitleSection title="Contact" />
      <div className="Contact-icons-container">
        <SocialIcons position={0} />
        <SocialIcons position={1} />
        <SocialIcons position={2} />
      </div>
    </section>
  );
};

export default Contact;
