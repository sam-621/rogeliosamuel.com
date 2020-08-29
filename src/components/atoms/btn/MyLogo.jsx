import React from "react";
import "../../../assets/styles/atoms/btn/logo.css";

import Logo from "../../../assets/img/Logo.jpg";

const MyLogo = () => {
  return (
    <img
      className="MyLogo"
      src={Logo}
      alt="Rogelio Samuel Moreno Corrales"
      title="RS"
      width="40"
      height="40"
    />
  );
};

export default MyLogo;
