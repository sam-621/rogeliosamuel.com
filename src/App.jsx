import React from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/pages/';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
