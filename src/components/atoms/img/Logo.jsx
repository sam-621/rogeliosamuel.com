import React from "react";
import "../../../assets/styles/components/atoms/img/logo.css";

import LogoRS from "../../../assets/img/Logo.jpg";

const Logo = () => {
  return (
    <img
      className="LogoRS"
      src={LogoRS}
      alt="Rogelio Samuel Moreno Corrales"
      width="60px"
      height="60px"
    />
  );
};

export default Logo;
