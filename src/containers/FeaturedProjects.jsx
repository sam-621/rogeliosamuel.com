import React, { useEffect } from "react";
import "../assets/styles/containers/FeaturedProjects.css";

import { FeaturedProjectsData } from "../assets/FeaturedProjects";
import SecondaryText from "../components/atoms/text/SecondaryText";
import Arrow from "../components/atoms/img/Arrows";
import FeaturedProjectDescription from "../components/molecules/FeaturedProjectDescription";
import SocialMediaAPI from "../assets/img/SocialMedia-API.png";
import SafeContactAPi from "../assets/img/safecontact-api.png";
import JobsListing from "../assets/img/jobs-listing.jpg";

const FeaturedProjects = () => {
  const img = [SocialMediaAPI, SafeContactAPi, JobsListing];
  var slide1;
  var slide2;
  var slide3;
  var slides = [];
  var index = 0;

  useEffect(() => {
    slide1 = document.getElementById("0");
    slide2 = document.getElementById("1");
    slide3 = document.getElementById("2");
    slides = [slide1, slide2, slide3];
    index = 0;
  });

  function Next() {
    slides[0].style.display = "none";
    slides[1].style.display = "none";
    slides[2].style.display = "none";

    index++;

    if (index === 3) {
      index = 0;
      slides[index].style.display = "grid";
      return;
    }

    slides[index].style.display = "grid";
  }

  function Back() {
    slides[0].style.display = "none";
    slides[1].style.display = "none";
    slides[2].style.display = "none";

    index--;

    if (index === -1) {
      index = 2;
      slides[index].style.display = "grid";
      return;
    }

    slides[index].style.display = "grid";
  }
  return (
    <main className="FeaturedProjects-container">
      <div className="FeaturedProjets-title">
        <SecondaryText Content="Featured projects" FontSize="30px" />
      </div>
      <div className="FeaturedProjects">
        <div className="Arrow-container">
          <button onClick={Back}>
            <Arrow Direction="left" />
          </button>
        </div>
        <div>
          <div>
            {FeaturedProjectsData.map((project, index) => {
              return index > 0 ? (
                <div
                  className="FeaturedProject-content none"
                  id={index}
                  key={project.ID}
                >
                  <div>
                    <FeaturedProjectDescription
                      littleDescription={project.littleDescription}
                      technologies={project.technologies}
                      title={project.title}
                    />
                  </div>
                  <div className="FeaturedProject-img">
                    <img src={img[index]} alt="" width="569px" height="300px" />
                  </div>
                </div>
              ) : (
                <div
                  className="FeaturedProject-content"
                  id="0"
                  key={project.ID}
                >
                  <div>
                    <FeaturedProjectDescription
                      key={project.ID}
                      littleDescription={project.littleDescription}
                      technologies={project.technologies}
                      title={project.title}
                    />
                  </div>
                  <div className="FeaturedProject-img">
                    <img src={img[index]} alt="" width="569px" height="300px" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Arrow-container">
          <button onClick={Next}>
            <Arrow Direction="right" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProjects;
