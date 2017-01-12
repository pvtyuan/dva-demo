import React from 'react';
import { Router, Route } from 'dva/router';

import App from "./routes/App.js";

import Login from "./routes/Login.js";

import Register from "./routes/Register.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
    </Router>
  );
}

export default RouterConfig;
