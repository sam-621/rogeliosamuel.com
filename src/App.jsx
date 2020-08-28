import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutProject from "./pages/AbourProject";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/:projectID">
          <AboutProject />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
