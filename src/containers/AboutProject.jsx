import React from 'react';
import '../assets/styles/aboutProject.css'
import { useParams } from 'react-router-dom';

//Projects images
import jobListing from '../assets/img/jobs-listing.jpg';
import naves from '../assets/img/Naves.png';
import safeContacts from '../assets/img/safe-contacts.png'
import socialMediaDashboard from '../assets/img/social-media-dashboard.png';
import pingPong from '../assets/img/ping-pong.png';
import MyFirstWebsite from '../assets/img/my-first-website.png';
import SimonSays from '../assets/img/Simon-says.png';
import CRUDmysql from '../assets/img/CRUD-mysql.png'

//Technologies icon
import Node from '../assets/img/node-js.svg';
import react from '../assets/img/react-brands.svg';
import js from '../assets/img/js.svg';
import HTML from '../assets/img/HTML.svg';
import CSS from '../assets/img/CSS.svg';
import MySQL from '../assets/img/mysql.svg'

const AboutProject = ({ projects }) => {
    const { id } = useParams();
    const Images = [
        jobListing,
        socialMediaDashboard,
        safeContacts,
        CRUDmysql,
        naves,
        pingPong,
        SimonSays,
        MyFirstWebsite,
    ]
    const techIcons = [
        Node,
        react,
        js,
        HTML,
        CSS,
        MySQL
    ]
    console.log(projects[4])

    return(
        <main className="AboutProject-container">
            <div className="Project-image">
                <img src={Images[id - 1]} alt="" width="700px" height="360px" />
            </div>
            <div className="About-project">
                <div>
                    <h2>Description</h2>
                    <p>{projects[id - 1].longDescription}</p>
                </div>
                <div>
                    <h2>Features</h2>
                    {projects[id - 1].features.map((feature, index) => {
                        return(
                            <ul key={index}>
                                <li>{feature}</li>
                            </ul>
                        );
                    })
                    }
                </div>
                <div className="Tech-icons">
                    <h2>Technologies</h2>
                    {projects[id - 1].Technologies.map((tech, index) => {
                        return(
                            <img src={techIcons[tech.icon]} alt="" width="50px" height="50px" key={index} /> 
                        )
                    })

                    }
                </div>
            </div>
        </main>
    );
}

export default AboutProject;