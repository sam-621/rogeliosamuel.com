import React from "react";
import "../../../assets/styles/atoms/btn/socialIcons.css";

import Github from "../../../assets/img/git.svg";
import Twitter from "../../../assets/img/twitter.svg";

const SocialIcons = ({ Icon, Url }) => {
  return (
    <a className="SocialIcons" href={Url}>
      <img
        src={Icon === "Twitter" ? Twitter : Github}
        alt="Social Icon"
        width="15px"
        height="15px"
      />
    </a>
  );
};

export default SocialIcons;
