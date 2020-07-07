import React from 'react';
import './assets/styles/app.css';
import Projects from './assets/data';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import NavBar from './containers/Navbar';
import FeaturedProjects from './containers/FeaturedProjects';

const App = () => {
    console.log(Projects)
    return(
        <BrowserRouter>
            <NavBar location='inProject' />
            <Switch>
                <Route exact path="/">
                    <FeaturedProjects projects={Projects} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;