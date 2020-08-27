import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import AboutProject from "./pages/AbourProject";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/project/:projectID" component={AboutProject} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
