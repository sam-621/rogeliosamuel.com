import React from 'react';
import '../assets/styles/featuredProjectCard.css';

import Arrow from '../assets/img/flecha.svg';
import { Link } from 'react-router-dom';

const FeaturedProjectCard = ({ index, title, image }) => {
    return(
        <article className="FeaturedProjectCard">
            <div className="Options">
                <div className="Title">
                    <h3>{title}</h3>
                </div>
                <div className="ViewProfile">
                    <Link to={`/projects/${index}`}>
                        <img src={Arrow} alt="" width="30px" height="30px" />
                    </Link>
                </div>
            </div>
            <div className="img">
                <img src={image} alt="" width="486" height="217"/>
            </div>  
        </article>
    );
}

export default FeaturedProjectCard;