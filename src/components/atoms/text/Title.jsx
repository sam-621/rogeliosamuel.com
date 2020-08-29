import React from "react";
import "../../../assets/styles/atoms/text/title.css";

const Title = ({ Content, Center }) => {
  return (
    <h1
      className="Title-text"
      style={Center ? { textAlign: "center" } : { textAlign: "start" }}
    >
      {Content}
    </h1>
  );
};

export default Title;
