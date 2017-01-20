import React from "react";
import {Router} from "dva/router";
import App from "./routes/App";
import Login from "./routes/Login";
import Layout from "./routes/Layout";
import Dashboard from "./components/Dashboard/Dashboard";

export default ({history, app}) => {
  const routes = [
    {
      path: "/",
      component: App,
      // getIndexRoute(nextState, cb) {
      //   require.ensure([], require => {
      //     cb(null, {component: require("./routes/App")})
      //   })
      // },
      childRoutes: [{
        path: "login",
        component: Login,
      }, {
        path: "app",
        component: Layout,
        childRoutes: [{
          path: "dashboard",
          component: Dashboard
        }]
      },
      ],
      indexRoute: {
        onEnter: (nextState, replace) => replace("/app/dashboard")
      }
    }
  ]

  return <Router history={history} routes={routes}/>
}

// const generateRoute =({path, component, childRoutes,indexRoute, indexRedirect }) => {
//   let val = {
//     path: path,
//     component: component
//   };
//   if (indexRoute) {
//     val["getIndexRoute"] = (nextState, cb) => {
//       require.ensure([], require => {
//         cb(null, {component: require()})
//       })
//     }
//   }
//   if (indexRedirect) {
//     val[]
//   }
// }
