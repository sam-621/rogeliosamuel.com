import React from "react";

import Nav from "../components/containers/Nav";
import Hero from "../components/containers/Hero";
import Projects from "../components/containers/Projects";
import Skills from "../components/containers/Skills";
import Contact from "../components/containers/Contact";
import Footer from "../components/containers/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
