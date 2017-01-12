import React from "react";
import {connect} from "dva";
import styles from "./App.css";
import Login  from "./Login";
import Controller from "./Controller";

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  loginProps = {
    spining: this.props.spining,
    onOk: (data) => {
      this.props.dispatch({type: "App/login", payload: data});
    }
  };

  controllerProps = {
    onSwitch: (data) => {
      this.props.dispatch({type: "App/spining", payload: data});
    }
  };

  getLoginProps = () => {
    return {
      spining: this.props.spining,
      onOk: (data) => {
        this.props.dispatch({type: "App/login", payload: data});
      }
    }
  };

  render() {
    return (
      <div className={styles.normal}>
        <Login {...this.getLoginProps()} />
        <Controller {...this.controllerProps} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    spining: state.App.spining
  };
}

export default connect(mapStateToProps)(App);
