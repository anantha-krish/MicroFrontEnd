import React, { useEffect, useRef } from "react";
// marketing is configured in webpack
import { mount } from "dashboard/DashboardApp";

export default () => {
  // create reference
  const ref = useRef(null);

  // implement logic to mount the MicrofrontEnd when DOM is loaded
  useEffect(() => {
  mount(ref.current);
  }, []);

  return <div ref={ref}></div>;
};
