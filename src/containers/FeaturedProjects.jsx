import React from "react";
import "../assets/styles/containers/FeaturedProjects.css";

import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import SecondaryText from "../components/atoms/text/SecondaryText";
import Arrow from "../components/atoms/img/Arrows";
import FeaturedProjectDescription from "../components/molecules/FeaturedProjectDescription";

const FeaturedProjects = () => {
  return (
    <main className="FeaturedProjects-container">
      <div className="FeaturedProjets-title">
        <SecondaryText Content="Featured projects" FontSize="30px" />
      </div>
      <div className="FeaturedProjects">
        <div className="Arrow-container">
          <button>
            <Arrow Direction="left" />
          </button>
        </div>
        <div className="FeaturedProject-content">
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
        <div className="Arrow-container">
          <button>
            <Arrow Direction="right" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProjects;
