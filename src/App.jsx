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

const App = () => {
    return(
        <BrowserRouter>
            <NavBar location='inProject' />
            <Switch>
                <Route exact path="/">
                    <FeaturedProjects projects={Data} />
                </Route>
                <Route exact path="/projects">
                    <Projects projects={Data} />
                </Route>    
            </Switch>
        </BrowserRouter>
    );
}

export default App;