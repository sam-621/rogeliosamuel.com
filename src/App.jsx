import React from "react";
import "./assets/styles/app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PrimaryLink from "./components/atoms/btn/PrimaryLink";
import PrimaryittleLink from "./components/atoms/btn/PrimaryLittleLink";
import SecondaryA from "./components/atoms/btn/SecondaryA";
import MyLogo from "./components/atoms/btn/MyLogo";
import SocialIcon from "./components/atoms/btn/SocialIcons";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {/* <MyLogo />
          <PrimaryLink Url="#" Content="Details" />
          <PrimaryittleLink Url="#" Content="Details" />
          <SecondaryA Url="#" Content="Code" /> */}
          {/* <SocialIcon Icon="Twitter" /> */}
          <SocialIcon Icon="Git" Url="#" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
