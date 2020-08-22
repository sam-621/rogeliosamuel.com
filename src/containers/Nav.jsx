import React from "react";
import "../assets/styles/containers/nav.css";

import Brand from "../components/molecules/Brand";

const Nav = () => {
  return (
    <nav>
      <div className="Nav-brand-container">
        <Brand />
      </div>
      <div>
        <h1>Hols</h1>
      </div>
    </nav>
  );
};

export default Nav;
