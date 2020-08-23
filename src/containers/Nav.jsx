import React from "react";
import "../assets/styles/containers/nav.css";

import Brand from "../components/molecules/Brand";
import SocialMediaIcons from "../components/molecules/SocialMediaIcons";

const Nav = () => {
  return (
    <nav>
      <div className="Nav-brand-container">
        <Brand />
      </div>
      <div>
        <SocialMediaIcons />
      </div>
    </nav>
  );
};

export default Nav;
