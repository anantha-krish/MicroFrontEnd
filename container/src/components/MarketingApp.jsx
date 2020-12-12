import React, { useEffect, useRef } from "react";
// marketing is configured in webpack
import { mount } from "marketing/MarketingApp";

export default () => {

  // implement logic to mount the MicrofrontEnd when DOM is loaded 
  useEffect(() => {
    // call mount while passing the element
    mount(ref.current);
    
  }, []);
 
  // create reference
  const ref = useRef(null);
  return <div ref={ref}></div>;

};
