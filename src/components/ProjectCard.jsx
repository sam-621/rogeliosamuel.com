import React from 'react';
import '../assets/styles/projectCard.css';

import gitHub from '../assets/img/github.svg';
import demo from '../assets/img/demo.svg';
import details from '../assets/img/details.svg'
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, littleDescription, Technologies, repo }) => {
    console.log(Technologies[0].color)
    return(
        <article className="ProjectCard-container">
            <div>
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
            </div>
            <div className="Project-options">
                <a href={repo} className="git">
                    <img 
                        src={gitHub} 
                        alt="GitHub icon"
                        width="30"
                        height="30"
                    />
                    <p>View code</p>
                </a>
                <Link to="/" className="git demo">
                    <img 
                        src={demo} 
                        alt="GitHub icon"
                        width="25"
                        height="30"
                    />
                    <p>View demo</p>
                </Link>
                <Link to="/" className="git details">
                    <img 
                        src={details} 
                        alt="GitHub icon"
                        width="30"
                        height="30"
                    />
                    <p>Details</p>
                </Link>
            </div>
        </article>
    );
}

export default ProjectCard;