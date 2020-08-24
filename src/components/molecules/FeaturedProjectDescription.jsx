import React from "react";
import "../../assets/styles/components/molecules/feturedProjectDescription.css";

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
        <div className="FeaturedProjectDescription-Technologies">
          {technologies.map((technology, index) => {
            return <p key={index}>{technology}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectDescription;
