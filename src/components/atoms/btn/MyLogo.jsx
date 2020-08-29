import React from "react";
import "../../../assets/styles/atoms/btn/logo.css";

import Logo from "../../../assets/img/Logo.jpg";
import { Link } from "react-router-dom";

const MyLogo = () => {
  return (
    <Link className="MyLogo" to="/">
      <img
        src={Logo}
        alt="Rogelio Samuel Moreno Corrales"
        title="RS"
        width="40"
        height="40"
      />
    </Link>
  );
};

export default MyLogo;
