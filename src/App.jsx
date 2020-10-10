import React from 'react';
import './assets/styles/app.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Contact } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
