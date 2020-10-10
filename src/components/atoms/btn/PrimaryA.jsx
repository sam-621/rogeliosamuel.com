import React from "react";
import "../../../assets/styles/atoms/btn/primaryA.css";

const PrimaryA = ({ Content, Url }) => {
  return (
    <a rel="noreferrer" target="_blank" className="PrimaryA" href={Url}>
      {Content}
    </a>
  );
};

export default PrimaryA;
