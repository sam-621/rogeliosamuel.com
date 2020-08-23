import React from "react";
import "../../../assets/styles/components/atoms/img/me.css";

import MyPhoto from "../../../assets/img/Yo.jpg";

const Me = () => {
  return (
    <img
      className="MyPhoto"
      src={MyPhoto}
      alt="Rogelio Samuel Moreno Corrales"
    />
  );
};

export default Me;
