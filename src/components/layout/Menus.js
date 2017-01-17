import React, {PropTypes} from "react";
import {Menu, Icon} from "antd";
import {Link} from "dva/router";
import MenuConfig from "../../config/MenuConfig";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const topMenus = MenuConfig.map(item => item.key);
const getMenus = (menuArray, parentPath) => {
  parentPath = parentPath || "/";
  return menuArray.map(item => {
    if (item.child) {
      return (
        <SubMenu key={item.key} title={<span>{item.icon && <Icon type={item.icon}/>}{item.name}</span>}>
          {getMenus(item.child, parentPath + item.key + "/")}
        </SubMenu>
      )
    } else {
      return (
        <MenuItem key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon && <Icon type={item.icon}/>}
            {item.name}
          </Link>
        </MenuItem>
      )
    }
  })
}

const Menus = ({location, isNavbar, onClick}) => {
  const menuItems = getMenus(MenuConfig);
  console.log(location);
  return (
    <Menu
      mode="inline"
      theme="dark"
      onClick={onClick}
      defaultOpenKeys={isNavbar ? menuItems.map(item => item.key) : []}
      defaultSelectedKeys={[location.pathname.split("/")[location.pathname.split("/") - 1] || "dashboard"]}>
      {menuItems}
    </Menu>
  )
};

Menus.propTypes = {
  isNavbar: PropTypes.bool,
  onClick: PropTypes.func
}

export default Menus;
