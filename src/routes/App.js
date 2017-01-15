import React from "react";
import {connect} from "dva";
import styles from "./App.css";

function App({children, location, dispatch, AppModel}) {

  return (
    <div className={styles.normal}>
      {children}
    </div>
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(App);
