import React from "react";
import {Menu, Layout} from "antd";
import Menus from "./Menus";
import styles from "./SiderContainer.css";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const Sider = Layout.Sider;

export default ({showNavbar, showNavbarText, location}) => {
  const menusProps = {
    showNavbar,
    showNavbarText,
    location
  };

  return (
    <div>
      <div className={styles.logo}/>
      <Menus {...menusProps}/>
    </div>
  );
};
