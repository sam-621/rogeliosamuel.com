import React from "react";
import "../../assets/styles/containers/hero.css";

import Title from "../atoms/text/Title";
import Me from "../../assets/img/Yo_opt.jpg";

const Hero = () => {
  return (
    <div className="Hero-container">
      <div className="Hero-info">
        <Title Content="Im a Backend developer" Center={true} />
        <div className="CodeText">
          <p>
            Backend developer. Typescript, MySQL. Open to working with other
            people
          </p>
        </div>
      </div>
      <div className="Hero-MyImg">
        <img
          src={Me}
          alt="Rogelio Samuel moreno Corrales"
          width="200px"
          height="280px"
        />
      </div>
    </div>
  );
};

export default Hero;
