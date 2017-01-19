import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Layout from "../components/layout/Layout.jsx"

function DashBorad({children, location, dispatch, AppModel}) {
  const switchSider = () => {
    dispatch({type: "AppModel/switchSider"});
  };

  const foldSider = () => {
    dispatch({type: "AppModel/foldSider"});
  }

  const layoutProps = {
    ...AppModel,
    location,
    foldSider,
    switchSider
  };

  return (
    <Layout className={styles.layout} {...layoutProps} />
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(DashBorad);
