import React from 'react';
import { connect } from 'dva';
import styles from './DashBorad.css';

function DashBorad() {
  return (
    <div className={styles.normal}>
      Route Component: DashBorad
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(DashBorad);
