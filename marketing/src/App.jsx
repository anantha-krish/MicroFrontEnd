import React from "react";
import { StylesProvider } from "@material-ui/core";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Landing from './components/Landing.jsx';
import Pricing from './components/Pricing.jsx';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
              <Route exact path="/pricing" component={Pricing}/>
              <Route path="/" component={Landing}/>
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
