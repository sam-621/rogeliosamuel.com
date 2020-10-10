import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";

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
