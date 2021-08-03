import React from "react";
import { Route } from "react-router-dom";
import { isLogged } from "../components/storage";

const PrivateRoute = (props) =>
  isLogged() ? <Route {...props} /> : (window.location.href = "/login");
export default PrivateRoute;
