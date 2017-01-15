import React from "react";
import {Menu} from "antd";
import Menus from "./Menus"

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const Sider = ({}) => {
  const menusProps = {
    isNavbar: false,
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
