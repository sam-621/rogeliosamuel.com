import React from "react";

import ArrowRight from "../../../assets/img/right.svg";
import ArrowLeft from "../../../assets/img/left.svg";

const Arrows = ({ Direction }) => {
  return (
    <img src={Direction === "right" ? ArrowRight : ArrowLeft} alt="Arrow" />
  );
};

export default Arrows;
