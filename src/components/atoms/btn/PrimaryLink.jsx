import React from "react";
import "../../../assets/styles/atoms/btn/primaryLink.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({ Content, Url }) => {
  return (
    <Link className="PrimaryLink" to={Url}>
      {Content}
    </Link>
  );
};

export default PrimaryButton;
