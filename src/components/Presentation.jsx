import React from 'react';
import '../assets/styles/presentation.css'
import Yo from '../assets/Images/Yo.jpg'

const Presentation = () => {
    return(
        <section className="Presentation">
            <div className="MyText">
                <h2>
                    Programador <strong>autodidacta</strong>, con 
                    pasión por <strong>aprender</strong> y 
                    <strong> trabajar</strong> con otras personas
                </h2>
            </div>
            <div className="MyImage">
                <img 
                    src={ Yo } 
                    alt="Rogelio Samuel Moreno Corrales" 
                    width="300px" 
                    height="390px" 
                />
            </div>
        </section>
    );
}

export default Presentation;