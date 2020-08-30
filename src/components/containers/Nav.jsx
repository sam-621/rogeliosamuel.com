import React from "react";
import "../../assets/styles/containers/nav.css";

import MyLogo from "../atoms/btn/MyLogo";
import SocialIcons from "../atoms/btn/SocialIcons";

const Nav = () => {
  return (
    <nav>
      <div>
        <MyLogo />
      </div>
      <div className="SocialIcons-container">
        <SocialIcons position={0} />
        <SocialIcons position={1} />
      </div>
    </nav>
  );
};

export default Nav;
