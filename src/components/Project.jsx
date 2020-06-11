import React from 'react';
import '../assets/styles/project.css'

const Projects = (props) => {
    const { title, date, tech, description, link, typeOf, image } = props

    return(
        <article className="Project">
            <div className="Description">
                <h4>{ title }</h4>
                <p><strong>Fecha:</strong>{ date }</p>
                <p><strong>{ tech }</strong></p>
                <p>{ description }</p>
                <p>Puedes verlo aqui: <a href={ link } target="_blank">{ typeOf }</a></p>
            </div>
            <hr />
            <div className="Image">
                <img id="myImg" src={ image } alt="Naves" width="90%" height="250px" />
            </div>
        </article>        
    );
}

export default Projects;