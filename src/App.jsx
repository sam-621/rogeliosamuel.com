import React from 'react';
import './assets/styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Contact, About, ProjectsPage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={ProjectsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
