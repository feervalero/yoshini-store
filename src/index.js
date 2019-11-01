import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Admin from "./admin/Pages/Admin";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route component={Admin} path="/admin"  />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
