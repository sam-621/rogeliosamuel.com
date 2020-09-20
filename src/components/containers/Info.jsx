import React from "react";
import "../../assets/styles/containers/info.css";

import Skills from "../molecules/Skills";
import Contact from "../molecules/Contact";

const Info = () => {
  return (
    <section className="Info-container">
      <Skills />
      <Contact />
    </section>
  );
};

export default Info;
