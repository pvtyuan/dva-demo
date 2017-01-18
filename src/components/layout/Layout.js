import React from "react";
import {Layout} from "antd";
import styles from "./Layout.less";
import SiderContainer from "./SiderContainer";
import HeaderContainer from "./HeaderContainer";
import ContentContainer from "./ContentContainer";
import FooterContainer from "./FooterContainer";
import Menus from "./Menus"
import {Link} from "dva/router";

const {Content, Header, Footer, Sider}  = Layout;

export default ({username, location}) => {

  const siderContainerProps = {
    location,
    showNavbar: true,
    showNavbarText: true
  };

  const menusProps = {
    location,
    showNavbar: true,
    showNavbarText: true
  };

  const contentContainerProps = {
    username,
    location,
    showNavbar: true
  };

  const headerContainerProps = {
    username,
    location,
    showNavbar: true
  };

  const footerContainerProps = {
    username,
    location,
    showNavbar: true
  };

  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider}>
        <SiderContainer {...siderContainerProps} />
      </Sider>
      <Layout className={styles.main}>
        <Header className={styles.header}>
          <HeaderContainer {...headerContainerProps} />
        </Header>
        <Content>
          <ContentContainer {...contentContainerProps} />
        </Content>
        <Footer>
          <FooterContainer {...footerContainerProps} />
        </Footer>
      </Layout>
    </Layout>
  )
}
