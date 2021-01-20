import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
// styling
import "assets/scss/material-kit-react.scss?v=1.9.0";
// pages
import HomePage from "views/HomePage/HomePage.js";
import RulesPage from "views/RulesPage.js";
import SignUpPage from "views/SignUpPage.js";
import TournamentsPage from "views/TournamentsPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/rules" component={RulesPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/tournaments" component={TournamentsPage} />
      <Route path="/jcs-lol" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);