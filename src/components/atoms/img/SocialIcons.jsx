import React from "react";

import TwitterLogo from "../../../assets/img/twitter.svg";
import GitHubLogo from "../../../assets/img/github.svg";

export const Icon = ({ Icon }) => {
  return (
    <img
      src={Icon === "Git" ? GitHubLogo : TwitterLogo}
      alt="GitHub logo"
      width="25px"
      height="25px"
    />
  );
};
