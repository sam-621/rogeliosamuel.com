import React from "react";

import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import SecondaryText from "../components/atoms/text/SecondaryText";
import Arrow from "../components/atoms/img/Arrows";
import FeaturedProjectDescription from "../components/molecules/FeaturedProjectDescription";

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
        <div>
          <div>
            {FeaturedProjectsData.map((project, index) => {
              return (
                <FeaturedProjectDescription
                  key={project.ID}
                  littleDescription={project.littleDescription}
                  technologies={project.technologies}
                  title={project.title}
                />
              );
            })}
          </div>
          <div></div>
        </div>
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
