import React from 'react';
import { connect } from 'dva';
import styles from './App.css';
import {Login} from "./Login"

class App {

  loginProps = {
  loginLoading: false
  };

  render = () => {
    return (
      <div className={styles.normal}>
        <Login {...loginProps} />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
