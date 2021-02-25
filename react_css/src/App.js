import React, { useEffect, useState } from "react";
import { Route, Link, useLocation } from "react-router-dom";
import IntensiveElement from "./IntensiveElement";

export default function Parent() {
  const [intensiveElement, setIntensiveElement] = useState("");
  const [displayStyle, setDisplayStyle] = useState({});
  const location = useLocation();

  useEffect(() => {
    setIntensiveElement(<IntensiveElement />);
  }, []);

  useEffect(() => {
    if(location.pathname !== "/child1" && location.pathname !== "/child2") {
      setDisplayStyle({overflow: "hidden"})
    } else {
      setDisplayStyle({overflow: "hidden", height: "0px"})
    }
  }, [location.pathname]);

  return (
    <>
      <Links />
      <div style={displayStyle}>
        {intensiveElement}
      </div>
      <Route path="/child1" exact>
        <Child1 />
      </Route>
      <Route path="/child2" exact>
        <Child2 />
      </Route>
    </>
  );
}

function Links() {
  return (
    <ul>
      <li><Link to="/child1">Go to child 1</Link></li>
      <li><Link to="/child2">Go to child 2</Link></li>
    </ul>
  );
}

function Child1() {
  return <p>Child 1</p>;
}

function Child2() {
  return <p>Child 2</p>;
}
