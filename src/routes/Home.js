import React from 'react';
import { connect } from 'dva';
import styles from './Home.css';
import Layout from "../components/layout/Layout"
import Main from "../components/layout/Main";

function DashBorad({children, location, dispatch, AppModel}) {
  const layoutProps = {
    username: AppModel.username,
    location,
  };

  return (
    <div className={styles.normal}>
      {/*<Layout className={styles.layout} {...layoutProps} />*/}
      <Main />
      {/*<LessTest />*/}
    </div>
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(DashBorad);
