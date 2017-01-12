import React from 'react';
import { connect } from 'dva';
import styles from './App.css';
import Login  from "./Login"

class App extends React.Component{

  loginProps = {
  loginLoading: false
  };

  render = () => {
    return (
      <div className={styles.normal}>
        <Login {...this.loginProps} />
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(App);
