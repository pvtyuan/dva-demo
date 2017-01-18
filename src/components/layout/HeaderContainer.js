import React from "react";
import {Menu, Icon, Popover, Row, Layout, Dropdown} from "antd";
import styles from "./HeaderContainer.less"
import Menus from "./Menus"

const Header = Layout.Header;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default ({username, showNavbar, location}) => {
  const handleMenuClick = () => {

  };

  const menusProps = {
    showNavbar,
    location
  };

  const menu = (
    <Menu>
      <MenuItem>1</MenuItem>
      <MenuItem>2</MenuItem>
      <MenuItem>3</MenuItem>
    </Menu>
  );

  return (
    <Row type="flex" className={styles.row}>
      {showNavbar
        ? <Popover placement="bottomLeft" content={<Menus {...menusProps}/>}>
          <div className={styles.siderButton}>
            <Icon type="bars" />
          </div>

        </Popover>
        :<div className={styles.siderButton}>
          <Icon type="menu-unfold"/>
        </div>
      }

      <Menu className={styles.menu} mode="horizontal">
        <SubMenu title={<span><Icon type="user"/>username</span>} className={styles.SubMenu}>
          <MenuItem key="logout" className={styles.MenuItem}>
            <a><Icon type="logout"/>Logout</a>
          </MenuItem>
        </SubMenu>
      </Menu>
    </Row>
  );
};
