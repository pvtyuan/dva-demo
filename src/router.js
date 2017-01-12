import React from "react";
import { Router, Route } from "dva/router";
import App from "./routes/App.js";
import Login from "./routes/Login.js";
import Register from "./routes/Register.js";
import Controller from "./routes/Controller.js";

function RouterConfig({ history }) {
  return (
    <Router history={history }>
      <Route path="/" component={ App }/>
      <Route path="/Login" component={ Login }/>
      <Route path="/Register" component={ Register }/>
      <Route path="/Controller" component={ Controller }/>
    </Router>
  );
}

export default RouterConfig;
