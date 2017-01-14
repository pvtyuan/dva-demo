import React from "react";
import {Menu} from "antd";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const Sider = ({}) => {
  return (
    <div className="layout-aside">
      <aside className="layout-sider">
        <Menu mode="inline"
              theme="dark">
          <MenuItem>d</MenuItem>
          <SubMenu title={<span>1</span>}>
            <MenuItem>a</MenuItem>
            <MenuItem>b</MenuItem>
          </SubMenu>
        </Menu>
      </aside>
      <div className="layout-main"></div>
    </div>
  );
};

export default Sider;
