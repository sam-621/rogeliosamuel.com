import React from "react";

import Title from "../atoms/text/Title";

const SectionTitle = ({ title }) => {
  return (
    <div className="Projects-title">
      <hr />
      <Title Center={false} Content={title} />
    </div>
  );
};

export default SectionTitle;
