import React from "react";
import SecondaryText from "../atoms/text/SecondaryText";
import CodeText from "../atoms/text/CodeText";

const HeroShortDescription = () => {
  return (
    <div>
      <SecondaryText Content={`I am a Backend developer`} />
      <CodeText Content="Programmer who is always learning, backend with node.js, frontend with React.js. Student university" />
    </div>
  );
};

export default HeroShortDescription;
