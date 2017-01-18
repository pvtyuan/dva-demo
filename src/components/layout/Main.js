import React from "react";
import { Layout, Menu, Icon, Breadcrumb, Row } from 'antd';
const { Header, Sider, Content, Footer } = Layout;
import styles from "./Main.less";

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class Main extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          className={styles.sider}
        >
          <div className={styles.logo} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              {!this.state.collapsed && <span className="nav-text">nav 1</span>}
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              {!this.state.collapsed && <span className="nav-text">nav 2</span>}
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              {!this.state.collapsed && <span className="nav-text">nav 3</span>}
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="user" />
              {!this.state.collapsed && <span className="nav-text">nav 4</span>}
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="heart-o" />
              {!this.state.collapsed && <span className="nav-text">nav 5</span>}
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="team" />
              {!this.state.collapsed && <span className="nav-text">nav 6</span>}
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.mainLayout}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="end">
            <Menu className={styles.menu} mode="horizontal">
              <SubMenu title={<span><Icon type="user"/>username</span>} className={styles.subMenu}>
                <MenuItem key="logout">
                  logout
                </MenuItem>
              </SubMenu>
            </Menu>
            </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 3600 }}>
              content
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Main;
