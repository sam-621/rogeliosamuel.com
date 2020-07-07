import React from 'react';
import '../assets/styles/projectCard.css'

const ProjectCard = ({ title, littleDescription, Technologies }) => {
    console.log(Technologies[0].color)
    return(
        <article className="ProjectCard-container">
            <div className="Title">
                <h1>{title}</h1>
            </div>
            <div className="Little-description">
                <p>{littleDescription}</p>
            </div>
            <div className="Technologies">
                {
                    Technologies.map((tech, index) => {
                        return(
                            <div key={index} className="TechIcon" style={{backgroundColor: `#${tech.background}`}}>
                                <p style={{color: `#${tech.color}`}}>{tech.tech}</p>
                            </div>
                        );
                    })
                }
            </div>
        </article>
    );
}

export default ProjectCard;