import React from 'react';
import '../assets/styles/aboutMe.css'

import Me from '../assets/img/Yo.jpg';

const AboutMe = () => {
    return(
        <main className="My-container">
            <div className="MyImage-container">
                <img src={Me} alt="" width="300px" height="400px" />
            </div>
            <div className="My-description">
                <h1>Hi, I'm Rogelio Samuel Moreno Corrales</h1>
                <p className="Code-mode">Programmer who is always learning, backend with node.js, frontend with React.js.Student of university</p>
                <h2>Who am I?</h2>
                <p className="Code-mode">I always like to be learning, more logical oriented tastes.<br/> Every day I try to improve, not only as a programmer but also as a person.<br/> I'm open to work with other people in order to practice and improve together, Send me a message if you'd like it :). <br/>Programmer since 15/11/2019</p>
            </div>
        </main>
    );
}

export default AboutMe;