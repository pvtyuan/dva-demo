import React from "react";
import {Menu, Icon, Popover, Row, Layout, Dropdown} from "antd";
import styles from "./HeaderContainer.less"
import Menus from "./Menus"

const Header = Layout.Header;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default ({username, showSider, location,
  siderFolded, switchSider, foldSider}) => {

  const menusProps = {
    openAllKeys: showSider,
    location,
    showText: siderFolded
  };

  return (
    <div className={styles.container}>
      {!showSider
        ? <Popover placement="bottomLeft" content={<Menus {...menusProps}/>}>
          <div className={styles.siderButton}>
            <Icon type="bars" />
          </div>

        </Popover>
        :<div className={styles.siderButton} onClick={foldSider}>
          <Icon type={siderFolded? "menu-unfold" : "menu-fold"}/>
        </div>
      }

      <Menu className={styles.menu} mode="horizontal">
        <SubMenu title={<span className={styles.subMenuTitle}><Icon type="user"/>{username}</span>}
                 className={styles.subMenu}>
          <MenuItem key="aa" className={styles.menuItem}>
            <a><Icon type="setting"/>settings</a>
          </MenuItem>
          <MenuItem key="logout" className={styles.menuItem}>
            <a><Icon type="logout"/>Logout</a>
          </MenuItem>

        </SubMenu>
      </Menu>
    </div>
  );
};
