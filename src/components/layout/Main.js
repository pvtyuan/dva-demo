import React from "react";
import {Menu, Layout, Icon} from "antd";
import styles from "./Main.css";

const {Header, Sider, Content, Footer} = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Main = ({collapsed}) => {

  const onCollapse = (collapsed) => {
  this.setState({collapsed})};

  return (
    <Layout>
      <Sider collapsible={true} collapsed={collapsed} onCollapse={onCollapse}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline">
          <MenuItem>nav 1</MenuItem>
          <MenuItem>nav 2</MenuItem>
          <MenuItem>nav 3</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <div className={styles.logo} />
          <Menu theme="light" mode="horizontal">
            <SubMenu title={<span><Icon type="user"/>username</span>}>
              <MenuItem key="logout">
                logout
              </MenuItem>
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    </Layout>
  );
};

export default Main;
