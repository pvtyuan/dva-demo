import React from "react";
import {Menu, Layout} from "antd";
import Menus from "./Menus";
import styles from "./SiderContainer.css";

export default ({showSider, showSiderText, location,
  siderFolded}) => {
  const menusProps = {
    showSider,
    showSiderText,
    location,
    inlineMode: !siderFolded,
    openAllKeys: showSider,
  };

  return (
    <div>
      <div className={styles.logo}/>
      <Menus {...menusProps}/>
    </div>
  );
};
