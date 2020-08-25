import React from "react";

import Nav from "../containers/Nav";
import Hero from "../containers/Hero";
import Projects from "../containers/Projects";
import Footer from "../containers/Fotter";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
