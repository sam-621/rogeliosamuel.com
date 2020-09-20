import React from "react";
import "../../assets/styles/molecules/contact.css";

import SocialIcons from "../atoms/btn/SocialIcons";

const Contact = () => {
  return (
    <section className="Contact-container">
      <h2>Contact</h2>
      <div className="Contact-icons-container">
        <SocialIcons position={0} />
        <SocialIcons position={1} />
        <SocialIcons position={2} />
      </div>
    </section>
  );
};

export default Contact;
