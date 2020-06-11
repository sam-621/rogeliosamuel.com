import React from 'react';
import Project from '../components/Project';
import Footer from '../components/Footer';
import '../assets/styles/projects.css'
import Naves from '../assets/Images/Naves.png';
import AulaVirtual from '../assets/Images/Digital-school.png'

const Projects = () => {
    return(
        <>
            <section className="Project-container" id="Projects">
                <h3>Proyectos destacados</h3>
                <Project 
                    title="Juego de naves"
                    date="3/05/2020"
                    tech="javascript"
                    description="Juego de naves clásico con una nave (tu personaje) enemigos y la funcionalidad de disparar y el objetivo de destruir al jefe final."
                    link="https://rogeliosamuel621.github.io/Naves/Index.html"
                    typeOf="Game"
                    image={ Naves }
                />
                <Project
                    title="Escuela virtual"
                    date="3/06/2020"
                    tech="ejs / Node.js"
                    description="   Una aula virtuales en donde hay dos roles, el de profesor y el de alumno, el profesor puede agregar alumnos a una clase, eliminarlos o cambirlosde clase. el alumno podrá entrar a la clase que se le a asignado y podrá ver sus calificaciones"
                    link="https://rogeliosamuel621.github.io/Naves/Index.html"
                    typeOf="Game"
                    image={ AulaVirtual }
                />
            </section>
            <Footer />
        </>
    );
}

export default Projects;