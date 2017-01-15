import React from "react";
import {Router, Route, IndexRoute} from "dva/router";
import App from "./routes/App.js";
import Login from "./routes/Login.js";
import Register from "./routes/Register.js";
import Home from "./routes/Home.js";

function RouterConfig({ history }) {
  return (
    <Router history={ history }>
      <Route path="/" component={ App }>
        <Route path="login" component={ Login }/>
        <Route path="register" component={ Register }/>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  );
}

export default RouterConfig;
