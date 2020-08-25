import React from "react";
import "../../../assets/styles/components/btn/secondaryButton.css";
import { Link } from "react-router-dom";

import GitHub from "../../../assets/img/github.svg";

const SecondaryButton = ({ Function, Content }) => {
  return (
    <button className="SecondaryButton" onClick={Function}>
      <img src={GitHub} alt="git" width="25px" height="25px" />
      <p>{Content}</p>
    </button>
  );
};

export default SecondaryButton;
