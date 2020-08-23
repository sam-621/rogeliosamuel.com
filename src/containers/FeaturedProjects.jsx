import React from "react";

import SecondaryText from "../components/atoms/text/SecondaryText";
import Arrow from "../components/atoms/img/Arrows";

const FeaturedProjects = () => {
  return (
    <main>
      <div>
        <SecondaryText Content="Featured projects" FontSize="30px" />
      </div>
      <div>
        <div>
          <button>
            <Arrow Direction="left" />
          </button>
        </div>
        <div></div>
        <div>
          <button>
            <Arrow Direction="right" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProjects;
