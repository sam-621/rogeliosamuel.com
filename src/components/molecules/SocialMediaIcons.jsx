import React from "react";
import "../../assets/styles/components/molecules/socialMediaIcon.css";

import { Icon } from "../atoms/img/SocialIcons";

const SocialMediaIcon = () => {
  return (
    <div className="SocialMediaIcon-container">
      <a href="https://github.com/rogeliosamuel621" target="_blank">
        <Icon Icon="Git" />
      </a>
      <a href="https://twitter.com/rogeliosamuel21" target="_blank">
        <Icon Icon="Twitter" />
      </a>
    </div>
  );
};

export default SocialMediaIcon;
