import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Login from "../view/pages/login";
import Register from "../view/pages/register";
import Start from "../view/pages/start";
import Notfound from "../view/pages/notfound";
import PrivateRoute from "./PrivateRoute";
import Forgot from "../view/pages/forgot"
import { history } from "../view/pages/history";

export default function Rotas() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute component={Start} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Forgot} exact path="/forgot" />
        <Route component={Register} exact path="/register" />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}
