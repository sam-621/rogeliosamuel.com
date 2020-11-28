import React, { useState } from 'react';
import './styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/pages/';
import ColorTheme from './context/ColorTheme';

const App = () => {
  const [theme, setTheme] = useState(true);
  return (
    <ColorTheme.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ColorTheme.Provider>
  );
};

export default App;
