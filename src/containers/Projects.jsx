import React from 'react';
import '../assets/styles/projects.css';

import ProjectCard from '../components/ProjectCard';

const Projects = ({ projects }) => {
    return(
        <main className="Projects-container">
            {
                projects.map((project) => {
                    return(
                        <ProjectCard
                            key={project.id}
                            title={project.name} 
                            littleDescription={project.littleDescription} 
                            Technologies={project.Technologies} 
                            repo={project.repo}
                        />
                    );
                })
            }
        </main>
    );
}

export default Projects;