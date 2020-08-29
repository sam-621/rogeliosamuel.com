import React from "react";
import "../../../assets/styles/components/atoms/text/PrimaryText.css";

const PrimaryText = ({ FontSize, Content }) => {
  return <h1 className="PrimaryText">{Content}</h1>;
};

export default PrimaryText;
