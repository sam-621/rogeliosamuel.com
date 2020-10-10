import React from "react";
import "../../../assets/styles/atoms/btn/socialIcons.css";

import Github from "../../../assets/img/git.svg";
import Twitter from "../../../assets/img/twitter.svg";
import Mail from "../../../assets/img/mailto.svg";

const SocialIcons = ({ position }) => {
  const SocialIcon = [
    { icon: Github, url: "https://github.com/rogeliosamuel621" },
    { icon: Twitter, url: "https://twitter.com/rogeliosamuel21" },
    { icon: Mail, url: "mailto:rogeliosamuel621@gmail.com" },
  ];
  return (
    <a
      rel="noreferrer"
      className="SocialIcons"
      href={SocialIcon[position].url}
      target="_blank"
    >
      <img
        src={SocialIcon[position].icon}
        alt="Social Icon"
        width="15px"
        height="15px"
      />
    </a>
  );
};

export default SocialIcons;
