import React from "react";
import MarketingApp from "./components/MarketingApp.jsx"
import Header from "./components/Header.jsx"
import { BrowserRouter } from "react-router-dom";
import { StylesProvider ,createGenerateClassName} from "@material-ui/core";

const generateClassName = createGenerateClassName({
  productionPrefix:'co'
})

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
   <BrowserRouter>
    <div>
   <Header/>
   <MarketingApp/>
    </div>
    </BrowserRouter>
    </StylesProvider>
  
  );
};
