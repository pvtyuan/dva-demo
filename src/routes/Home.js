import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Layout from "../components/layout/Layout"

function DashBorad({children, location, dispatch, AppModel}) {
  return (
    <div className={styles.normal}>
      <Layout className={styles.layout}/>
    </div>
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(DashBorad);
