import React from 'react';
import '../assets/styles/featuredProjects.css'
import { Link } from 'react-router-dom';

import jobListing from '../assets/img/jobs-listing.jpg';
import naves from '../assets/img/Naves.png';
import safeContacts from '../assets/img/safe-contacts.png'
import socialMediaDashboard from '../assets/img/social-media-dashboard.png';

import FeaturedProjectsCard from '../components/FeaturedProjectCard';

class FeaturedProjects extends React.Component {
    constructor(props){
        super(props);
        this.images = [
            jobListing,
            naves,
            socialMediaDashboard,
            safeContacts
        ]
    }
    
    render() {
        return( 
            <main className="FeaturedProjects-container">
                {   
                    this.props.projects.map((project, index) => {
                        return(
                            <div className="Article-container" key={project.id}>
                                <FeaturedProjectsCard 
                                    index={project.id}
                                    title={project.name}
                                    image={this.images[index]}
                                />
                            </div>
                        );
                    })
                }
                <div className="All-project">
                    <Link to="/projects">
                        View all
                    </Link>
                </div>
            </main>
        );
    }
}

export default FeaturedProjects;