import React from "react";
import { Switch, Router, Route } from "react-router-dom";

import { StylesProvider ,createGenerateClassName} from "@material-ui/core";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassName  = createGenerateClassName(
  {
    productionPrefix:'au'
  }
)
//accepts history as props
export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
              <Route path="/auth/signin" component={SignIn}/> 
              <Route path="/auth/signup" component={SignUp}/> 
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
