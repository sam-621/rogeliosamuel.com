import React from 'react';
import './assets/styles/app.css';
import Projects from './assets/data';

import NavBar from './containers/Navbar';
import FeaturedProjects from './containers/FeaturedProjects';

const App = () => {
    console.log(Projects)
    return(
        <>
            <NavBar location='inProject' />
            <FeaturedProjects projects={Projects} />
        </>
    );
}

export default App;