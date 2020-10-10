import React from "react";
import "../../../assets/styles/atoms/btn/secondaryA.css";
const SecondaryA = ({ Url, Content }) => {
  return (
    <a rel="noreferrer" target="_blank" className="SecondaryA" href={Url}>
      {Content}
    </a>
  );
};

export default SecondaryA;
