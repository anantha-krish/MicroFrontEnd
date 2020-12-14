import React, { useEffect, useRef } from "react";
// marketing is configured in webpack
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default () => {
  // create reference
  const ref = useRef(null);
  const history = useHistory();

  // implement logic to mount the MicrofrontEnd when DOM is loaded
  useEffect(() => {
    // call mount while passing the element 
    const { onParentNavigate } = mount(ref.current, {
      // destructioring window.location
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname
    });
    //listen to the path changes
    if (onParentNavigate) {
      history.listen(onParentNavigate);
    }
  }, []);

  return <div ref={ref}></div>;
};
