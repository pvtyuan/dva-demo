import React from 'react';
import {connect} from 'dva';
import styles from './Controller.css';
import {Switch} from "antd";

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  toggle = (value) => {
    this.setState({
      loading: value
    });
    this.props.onSwitch(value);
  };

  render() {
    return (
      <div className={styles.normal}>
        <Switch checked={this.state.loading} onChange={this.toggle}></Switch>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Controller);
