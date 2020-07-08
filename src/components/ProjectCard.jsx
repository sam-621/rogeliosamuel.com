import React from 'react';
import '../assets/styles/projectCard.css';

import gitHub from '../assets/img/github.svg';
import demoIcon from '../assets/img/demo.svg';
import details from '../assets/img/details.svg'
import Arrow from '../assets/img/flecha.svg';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, littleDescription, Technologies, repo, demo }) => {

    return(
        <article className="ProjectCard-container">
            <div>
                <div className="Title">
                    <Link to={`/projects/${id}`}>
                        <h1>{title} <strong><img src={Arrow} alt="" width="30px" height="30px" /></strong></h1>
                    </Link>
                </div>
                <div className="Little-description">
                    <p className="NoMobile">{littleDescription}</p>
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
                <a href={repo} rel="noopener noreferrer" className="git" target="_blank">
                    <img 
                        src={gitHub} 
                        alt="GitHub icon"
                        width="30"
                        height="30"
                    />
                    <p>View code</p>
                </a>
                <a href={demo} rel="noopener noreferrer" className="git demo" target="_blank">
                    <img 
                        src={demoIcon} 
                        alt="GitHub icon"
                        width="25"
                        height="30"
                    />
                    <p>View demo</p>
                </a>
                <Link to={`/projects/${id}`} className="git details">
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