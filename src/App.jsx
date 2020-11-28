import React, { useState } from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, AboutMe, Contact, Projects } from './components/pages/';
import ColorTheme from './context/ColorTheme';

const App = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ColorTheme.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </BrowserRouter>
    </ColorTheme.Provider>
  );
};

export default App;
