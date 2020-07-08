import React from 'react';
import '../assets/styles/aboutProject.css'
import { useParams, Link } from 'react-router-dom';

//Projects images
import gitHub from '../assets/img/github.svg';
import demoIcon from '../assets/img/demo.svg';
import jobListing from '../assets/img/jobs-listing.jpg';
import naves from '../assets/img/Naves.png';
import safeContacts from '../assets/img/safe-contacts.png'
import socialMediaDashboard from '../assets/img/social-media-dashboard.png';
import pingPong from '../assets/img/ping-pong.png';
import MyFirstWebsite from '../assets/img/my-first-website.png';
import SimonSays from '../assets/img/Simon-says.png';
import CRUDmysql from '../assets/img/CRUD-mysql.png';
import BackArrow from '../assets/img/flechas.svg'

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
            <div className="Hero-project">

                <Link to="/projects" className="Back">
                    <img  src={BackArrow} alt="" width="30px" height="30px" />
                </Link>
                <div className="AboutProjects-options">
                    <h1>{projects[id -1].name}</h1>
                    
                    {/*Project code*/}
                    <a target="_blank" rel="noopener noreferrer" href={projects[id-1].repo} className="github-code">
                        <p>Project code </p>
                        <img src={gitHub} alt="" width="30px" height="30px" />
                    </a>
                    {/*Project demo*/}
                    <a target="_blank" rel="noopener noreferrer" href={projects[id -1].demo} className="Project-demo">
                        <p>Project demo</p>
                        <img src={demoIcon} alt="" width="30px" height="30px"/>
                    </a>
                </div>
                
            </div>
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