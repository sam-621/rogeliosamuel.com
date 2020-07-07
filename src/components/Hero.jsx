import React from 'react';
import '../assets/styles/hero.css';

import Logo from '../assets/img/Logo.jpg'
import gitHub from '../assets/img/github.svg';
import linkedin from '../assets/img/linkedin.svg'
import twitter from '../assets/img/twitter.svg'

const Hero = () => {
    return(
        <div className="Hero-container">
            <div className="MyLogo">
                <div className="Logo">
                    <img src={Logo} alt="Rogelio Samuel Moreno Corrales" width="64" height="64" />
                </div>
                <div className="MyName">
                    <h1>Rogelio Samuel Moreno Corrales</h1>
                    <h2>Backend, Frontend, and Always learning</h2>
                </div>
            </div>
            <div className="Links">
                <a href="http://github.com/rogeliosamuel621">
                    <img 
                        src={gitHub} 
                        alt="GitHub icon"
                        width="30"
                        height="30"
                    />
                </a>
                <a href="http://twitter.com/rogeliosamuel21">
                    <img 
                        src={twitter} 
                        alt="Twitter icon"
                        width="30"
                        height="30"
                    />
                </a>
                <a href="https://www.linkedin.com/in/rogelio-samuel-moreno-corrales/">
                    <img 
                        src={linkedin} 
                        alt="linkedin icon"
                        width="30"
                        height="30"
                    />
                </a>
            </div>
        </div>
    );
}

export default Hero;