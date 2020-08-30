import React from "react";
import "../../assets/styles/molecules/projectOptions.css";

import Title from "../atoms/text/Title";
import PrimaryA from "../atoms/btn/PrimaryA";
import SecondaryA from "../atoms/btn/SecondaryA";

const ProjectOption = ({ title, demoURL, CodeURL }) => {
  return (
    <header>
      <Title Content={title} Center={true} />
      <div className="ProjectOptions-btn">
        <PrimaryA Content="View demo" Url={demoURL} />
        <SecondaryA Content="Code" Url={CodeURL} />
      </div>
    </header>
  );
};

export default ProjectOption;
