import React from "react";
import {Menu, Icon, Popover, Row} from "antd";
import styles from "./Header.css"
import Menus from "./Menus"

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

const Header = ({username, showNavbar, location}) => {
  const handleMenuClick = () => {

  };

  const menusProps = {
    showNavbar,
    location
  };

  return (
    <div>
    <Row type="flex" className={styles.header} align="top" justify="space-between">
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
      <Menu className="header-menu" mode="horizontal" onClick={handleMenuClick}>
        <SubMenu title={<span><Icon type="user"/>{username}</span>}>
          <MenuItem key="logout">
            logout
          </MenuItem>
        </SubMenu>
      </Menu>
    </Row>
    </div>
  );
};

export default Header;
