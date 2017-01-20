import React from "react";
import {Router, Route, IndexRedirect} from "dva/router";
import App from "./routes/App.js";
import Login from "./routes/Login.js";
import Register from "./routes/Register.js";
import Layout from "./routes/Layout.js";
import TestApp from "./components/TestApp/TestApp";
import Dashboard from "./components/Dashboard/Dashboard";

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Route path="/" component={ App }>

        <IndexRedirect to="/app/dashboard"/>
        <Route path="login" component={ Login }/>
        <Route path="register" component={ Register }/>
        <Route path="app" component={Layout}>

          <Route path="dashboard" component={Dashboard}/>
          <Route path="TestApp" component={TestApp}/>

        </Route>
      </Route>
    </Router>
  );
}

export default RouterConfig;
