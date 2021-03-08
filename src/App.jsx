import React from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Portfolio, About } from './components/pages/';
import { CustomRedirect } from './components/atoms';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={CustomRedirect} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
