import React from "react";
import {Menu} from "antd";
import Menus from "./Menus"

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const Sider = ({showNavbar, location}) => {
  const menusProps = {
    showNavbar,
    location
  }

  return (
    <div className="layout-aside">
      <aside className="layout-sider">
        <Menus {...menusProps}/>
      </aside>
    </div>
  );
};

export default Sider;
