import React from 'react';
import Presentation from '../containers/Presentation';
import Projects from '../containers/Projects';
import Footer from '../containers/Footer';
import '../assets/styles/app.css'

const App = () => {
    return(
        <>
            <Presentation/>
            <Projects/>
            <Footer/>
        </>
    );
}

export default App;