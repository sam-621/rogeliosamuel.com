import React from 'react';
import './assets/styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Contact, About } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
