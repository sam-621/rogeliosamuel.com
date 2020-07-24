import React from 'react';
import '../assets/styles/projects.css';

import ProjectCard from '../components/ProjectCard';

const Projects = ({ projects }) => {
    return(
        <main className="Projects-container">
            {/* <div className="SearchBar-container">
                <div className="Search">
                    <input type="text" placeholder="Search by technology (Node.js)" />
                </div>
                <div className="clear-btn">
                    <button>Clear</button>
                </div>
            </div> */}
            {
                projects.map((project) => {
                    return(
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            title={project.name} 
                            littleDescription={project.littleDescription} 
                            Technologies={project.Technologies} 
                            repo={project.repo}
                            demo={project.demo}
                        />
                    );
                })
            }
        </main>
    );
}

export default Projects;