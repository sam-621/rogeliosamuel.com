import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrimaryLink from "./components/atoms/btn/PrimaryLink";
import PrimaryittleLink from "./components/atoms/btn/PrimaryLittleLink";
import SecondaryA from "./components/atoms/btn/SecondaryA";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PrimaryLink Url="#" Content="Details" />
          <PrimaryittleLink Url="#" Content="Details" />
          <SecondaryA Url="#" Content="Code" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
