import React, { lazy, Suspense,useState } from "react";
import Header from "./components/Header.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Progress from "./components/Progress.js";

const MarketingApp = lazy(() => import("./components/MarketingApp"));

const AuthApp = lazy(() => import("./components/AuthApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default () => {
 
  const [isSignedIn, setIsSignedIn] = useState(false);
  
  return (
    
      <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header isSignedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>
            <Suspense fallback={<Progress/>}>
            <Switch>
              <Route path="/auth">
                <AuthApp onSignIn={()=>setIsSignedIn(true)} />
                </Route> 
              <Route path="/" component={MarketingApp} />
            </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </BrowserRouter>

  );
};
