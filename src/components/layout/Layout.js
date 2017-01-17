import React from "react";
import styles from "./Layout.css";
import Sider from "./Sider";
import Header from "./Header";
import {Link} from "dva/router";


const Layout = ({username, location}) => {
  const siderProps = {
    location,
    showNavbar: true
  };

  const HeaderProps = {
    username,
    location,
    showNavbar: true
  };

  return (
    <div className={styles.aside}>
      <div className={styles.sider}>
        <div className={styles.logo}>
          <h1><Link to="/">Home Service</Link></h1>
        </div>
        <Sider {...siderProps}/>
      </div>
      <div className={styles.main}>
        <Header {...HeaderProps}/>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
        <p>dsagsd</p>
      </div>
    </div>
  );
};

export default Layout;
