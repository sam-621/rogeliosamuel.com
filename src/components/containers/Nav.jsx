import React from "react";
import "../../assets/styles/containers/nav.css";

import MyLogo from "../atoms/btn/MyLogo";
import SocialIcons from "../atoms/btn/SocialIcons";

const Nav = () => {
  return (
    <nav>
      <div className="Nav-logo-text-container-query">
        <MyLogo />
        <h1>Rogelio Samuel Moreno Corrales</h1>
      </div>
      <div className="SocialIcons-container">
        <SocialIcons position={0} />
        <SocialIcons position={1} />
      </div>
    </nav>
  );
};

export default Nav;
