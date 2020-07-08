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
                <h1>Hola, soy Rogelio Samuel Moreno Corrales</h1>
                <p className="Code-mode">Programador en eterno aprendizaje, backend con node.js, frontend con React.js.Estudiante de universidad</p>
                <h2>Quién soy?</h2>
                <p className="Code-mode">Una persona que le apasiona el siempre estar aprendiendo, con gustos mas orientados a la lógica y no tanto al diseño. <br/> Todos los días trato de mejorar, no solo como programador sino también como persona. <br/> Estoy abierto a trabajar en equipo con el fin de prácticar, contáctame por twitter o mandame un Email :)</p>
            </div>
        </main>
    );
}

export default AboutMe;