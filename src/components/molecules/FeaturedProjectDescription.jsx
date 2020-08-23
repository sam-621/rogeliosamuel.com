import React from "react";

import Subtitle from "../atoms/text/Subtitles";
import Content from "../atoms/text/Content";

const FeaturedProjectDescription = ({
  title,
  littleDescription,
  technologies,
}) => {
  return (
    <div>
      <div>
        <Subtitle Content={title} />
        <Content Paragraph={littleDescription} />
      </div>
      <div>
        <Subtitle Content="Technolgies" />
        {technologies.map((technology, index) => {
          return <p key={index}>{technology}</p>;
        })}
      </div>
    </div>
  );
};

export default FeaturedProjectDescription;
