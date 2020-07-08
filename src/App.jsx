import React from 'react';
import './assets/styles/app.css';
import Data from './assets/data';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import NavBar from './containers/Navbar';
import FeaturedProjects from './containers/FeaturedProjects';
import Projects from './containers/Projects';
import AboutProject from './containers/AboutProject';

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <NavBar location='inMain' />
                    <FeaturedProjects projects={Data} />
                </Route>
                <Route exact path="/projects">
                    <NavBar location='inProject' />
                    <Projects projects={Data} />
                </Route>
                <Route exact path="/projects/:id">
                    <NavBar location='inProject' />
                    <AboutProject projects={Data} />
                </Route>    
            </Switch>
        </BrowserRouter>
    );
}

export default App;