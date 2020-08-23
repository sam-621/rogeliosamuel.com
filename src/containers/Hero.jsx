import React from "react";
import "../assets/styles/containers/hero.css";

import HeroShortDescription from "../components/molecules/HeroShortDescription";
import Me from "../components/atoms/img/Me";

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="Hero-description">
        <HeroShortDescription />
      </div>
      <div className="Hero-me">
        <Me />
      </div>
    </div>
  );
};

export default Hero;
