import React from "react"
import ReactDOM from "react-dom";
import App from "./App.jsx"


const mount = (el) =>{
    ReactDOM.render(
    <App></App> ,el)
}

if( process.env.NODE_ENV === 'development')
{
  const devRoot =  document.querySelector('#_marketing_dev_root');
 if(devRoot)
 {
     mount(devRoot);
 }
}

export {mount};