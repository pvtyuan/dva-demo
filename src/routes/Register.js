import React from 'react';
import { connect } from 'dva';
import styles from './Register.css';

function Register() {
  return (
    <div className={styles.normal}>
      Route Component: Register
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Register);
