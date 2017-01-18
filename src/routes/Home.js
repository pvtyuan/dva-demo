import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Layout from "../components/layout/Layout"

function DashBorad({children, location, dispatch, AppModel}) {
  const layoutProps = {
    username: AppModel.username,
    location,
  };

  return (
    <Layout className={styles.layout} {...layoutProps} />
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(DashBorad);
