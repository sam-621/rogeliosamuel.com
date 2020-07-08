import React from 'react';
import '../assets/styles/navBar.css'

import Hero from '../components/Hero';
import Nav from '../components/Nav';

const NavBar = ({ location }) => {
    return(
        <nav>
            <section>
                <Hero />
            </section>
            <section>
                <Nav inProject={location === 'inProject' ? true : false} inMain={location === 'inMain' ? true : false} />
            </section>
        </nav>
    );
}

export default NavBar;