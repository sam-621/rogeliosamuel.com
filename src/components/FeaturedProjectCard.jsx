import React from 'react';
import '../assets/styles/featuredProjectCard.css';

const FeaturedProjectCard = ({ index, title, image }) => {
    return(
        <article className="FeaturedProjectCard">
            <div className="Title">
                <h3>{title}</h3>
            </div>
            <div className="img">
                <img src={image} alt="" width="488" height="217"/>
            </div>  
        </article>
    );
}

export default FeaturedProjectCard;