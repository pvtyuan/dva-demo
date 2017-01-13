import React from "react";
import {connect} from "dva";
import styles from "./App.css";
import Login  from "./Login";
import DashBoard from "./DashBorad";

function App({children, location, dispatch, App}) {
  const {login, loginLoading} = App;

  const loginProps = {
    loginLoading: loginLoading,
    onOk: (data) => {
      dispatch({type: "App/login", payload: data});
    }
  };

  return (
    <div className={styles.normal}>
      {login
      ? <DashBoard />
      : <Login {...loginProps} />}
    </div>
  );
}

function mapStateToProps({...App}) {
  console.log(...App);
  return {...App};
}

export default connect(mapStateToProps)(App);
