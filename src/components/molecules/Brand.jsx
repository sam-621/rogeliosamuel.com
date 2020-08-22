import React from "react";
import "../../assets/styles/components/molecules/brand.css";
import Logo from "../atoms/img/Logo";
import PrimaryText from "../atoms/text/PrimaryText";

const Brand = () => {
  return (
    <>
      <Logo />
      <div className="Brand-text-container">
        <PrimaryText Content="Rogelio Samuel Moreno Corrales" FontSize="25px" />
        <PrimaryText
          Content="Backend, frontend, y always learning"
          FontSize="18px"
        />
      </div>
    </>
  );
};

export default Brand;
