import React from "react";

import Nav from "../components/containers/Nav";
import Hero from "../components/containers/Hero";
import Projects from "../components/containers/Projects";
import Footer from "../components/containers/Footer";
import Info from "../components/containers/Info";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Info />
      <Footer />
    </>
  );
};

export default Home;
