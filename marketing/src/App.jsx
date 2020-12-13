import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import Landing from './components/Landing.jsx';
import Pricing from './components/Pricing.jsx';

import { StylesProvider ,createGenerateClassName} from "@material-ui/core";

const generateClassName  = createGenerateClassName(
  {
    productionPrefix:'ma'
  }
)
//accepts history as props
export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
              <Route exact path="/pricing" component={Pricing}/>
              <Route path="/" component={Landing}/>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
