import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrimaryLink from "./components/atoms/btn/PrimaryLink";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PrimaryLink Url="#" Content="Details" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
