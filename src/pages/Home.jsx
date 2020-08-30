import React from "react";

import Nav from "../components/containers/Nav";
import Hero from "../components/containers/Hero";
import Projects from "../components/containers/Projects";
import Skills from "../components/containers/Skills";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
    </>
  );
};

export default Home;
