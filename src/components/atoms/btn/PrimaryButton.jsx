import React from "react";
import "../../../assets/styles/components/btn/primaryButton.css";
import { Link } from "react-router-dom";

const PrimaryButton = ({ Function, Content }) => {
  return (
    <button className="PrimaryButton" onClick={Function}>
      {Content}
    </button>
  );
};

export default PrimaryButton;
