import React from "react";
import "../../../assets/styles/atoms/secondaryA.css";
const SecondaryA = ({ Url, Content }) => {
  return (
    <a className="SecondaryA" href={Url}>
      {Content}
    </a>
  );
};

export default SecondaryA;
