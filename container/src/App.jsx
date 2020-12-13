import React from "react";
import MarketingApp from "./components/MarketingApp.jsx"
import Header from "./components/Header.jsx"
import { BrowserRouter } from "react-router-dom";


export default () => {
  return (
   <BrowserRouter>
    <div>
   <Header/>
   <MarketingApp/>
    </div>
    </BrowserRouter>
  
  );
};
