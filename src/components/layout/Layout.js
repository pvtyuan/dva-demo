import React from "react";
import styles from "./Layout.css";
import Sider from "./Sider";

const Layout = () => {
  return (
    <div className={styles.aside}>
      <div className={styles.sider}>
        <Sider />
      </div>
      <div className={styles.main}>
        <p>dsagsd</p>
      </div>
    </div>
  );
};

export default Layout;
