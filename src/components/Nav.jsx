import React from 'react';
import '../assets/styles/nav.css'
import { Link } from 'react-router-dom';

const Nav = ({ inProject, inMain, inAboutMe }) => {
    return(
        <div className="Navigation">
            <div className="Local-links">
                <Link to="/" className={inMain ? 'link In' : 'link'} >
                    <p>Main</p>    
                </Link>
                <Link to="/projects" className={inProject ? 'link In' : 'link'}>
                    <p>Projects</p>
                </Link>
                <Link to="/AboutMe" className={inAboutMe ? 'link In' : 'link'}>
                    <p>About me</p>
                </Link>
            </div>
            <div className="line">
                <hr/>
            </div>
        </div>
    );
}

export default Nav;