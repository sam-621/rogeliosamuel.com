import React from 'react';
import '../assets/styles/navbar.css'
import Logo from '../assets/Images/Logo.jpg'

const NavBar = () => {
    return(
        <nav>   
            <div className="Logo">
                <img 
                    src= { Logo } 
                    alt="Logo RS" 
                    width="64px" 
                    height="64px" 
                /> 
                <h1>
                    <a href="/">
                        Rogelio Samuel Moreno Corrales
                    </a>
                </h1>
            </div>
            <div className="Links">
                <a href="#Projects">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </div>
        </nav>
    );
}

export default NavBar;