import React, { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import IntensiveElement from "./IntensiveElement";

export default function Parent() {
  const [intensiveElement, setIntensiveElement] = useState("");
  useEffect(() => {
    setIntensiveElement(<IntensiveElement />);
  }, []);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Links />
      <Route path="/" exact>
        {intensiveElement}
      </Route>
      <Route path="/child1" exact>
        <Child1 />
      </Route>
      <Route path="/child2" exact>
        <Child2 />
      </Route>
    </Router>
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
