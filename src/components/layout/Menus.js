import React, {PropTypes} from "react";
import {Menu, Icon} from "antd";
import {Link} from "dva/router";
import MenuConfig from "../../config/MenuConfig";
import styles from "./Menus.css";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const topMenus = MenuConfig.map(item => item.key);
const getMenus = (menuArray, parentPath, inlineMode) => {
  console.log(`get menu for ${parentPath}`);
  parentPath = parentPath || "/";
  return menuArray.map(item => {
    if (item.child) {
      return (
        <SubMenu key={item.key}
                 title={
                   <span className={inlineMode ? styles.inlineSubMenu : styles.verticalSubMenu}>
                     {item.icon && <Icon type={item.icon}/>}
                     {(inlineMode || parentPath !== "/") && item.name}
                   </span>
                 }


        >
          {getMenus(item.child, parentPath + item.key + "/", inlineMode)}
        </SubMenu>
      )
    } else {
      return (
        <MenuItem key={item.key}>
          <Link to={parentPath + item.key} className={inlineMode ? styles.inlineItem : styles.verticalItem}>
            {item.icon && <Icon type={item.icon}/>}
            {(inlineMode || parentPath !== "/") && item.name}
          </Link>
        </MenuItem>
      )
    }
  })
}

const Menus = ({location, onClick, inlineMode, openAllKeys}) => {
  const menuItems = getMenus(MenuConfig, "/", inlineMode);

  return (
    <Menu
      mode={inlineMode ? "inline" : "vertical"}
      className={inlineMode ? styles.inline : styles.vertical}
      theme="dark"
      onClick={onClick}
      defaultOpenKeys={openAllKeys ? menuItems.map(item => item.key) : []}
      defaultSelectedKeys={[location.pathname.split("/")[location.pathname.split("/") - 1] || "dashboard"]}>
      {menuItems}
    </Menu>
  )
};

Menus.propTypes = {
  isNavbar: PropTypes.bool,
  onClick: PropTypes.func
};

export default Menus;
