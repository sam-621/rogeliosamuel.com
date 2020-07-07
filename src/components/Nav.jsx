import React from 'react';
import '../assets/styles/nav.css'

const Nav = ({ inProject, inAboutMe }) => {
    return(
        <div className="Navigation">
            <div className="Local-links">
                <p className={inProject ? 'In' : ''}>Projects</p>
                <p className={inAboutMe ? 'In' : ''}>About me</p>
            </div>
            <div className="line">
                <hr/>
            </div>
        </div>
    );
}

export default Nav;