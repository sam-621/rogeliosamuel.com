import React from "react";
import "../../../assets/styles/components/atoms/text/codeText.css";

const CodeText = ({ Content }) => {
  return (
    <div className="CodeText-container">
      <p>{Content}</p>
    </div>
  );
};

export default CodeText;
