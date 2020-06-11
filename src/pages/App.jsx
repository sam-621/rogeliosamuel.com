import React from 'react';
import Presentation from '../containers/Presentation';
import Projects from '../containers/Projects';
import '../assets/styles/app.css'

const App = () => {
    return(
        <>
            <Presentation/>
            <Projects/>
        </>
    );
}

export default App;