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

export default ({username, location, showSider,
  showSiderText, siderFolded, switchSider,
  foldSider}) => {

  console.log(`siderFolded: ${siderFolded}`);

  const siderContainerProps = {
    location,
    showSider,
    siderFolded,
    foldSider,
  };

  const menusProps = {
    location,
    showSider,
    siderFolded
  };

  const contentContainerProps = {
    username,
    location,
  };

  const headerContainerProps = {
    username,
    location,
    showSider,
    siderFolded,
    switchSider,
    foldSider,
  };

  const footerContainerProps = {
    username,
    location,
    showNavbar: true
  };

  return (
    <Layout className={styles.layout}>
      <Sider className={styles.sider}
             collapsible
             collapsed={siderFolded} trigger={null} collapsedWidth={48}
      >
        <SiderContainer {...siderContainerProps} />
      </Sider>
      <Layout className={styles.main}>
        <Header className={styles.header}>
          <HeaderContainer {...headerContainerProps} />
        </Header>
        <Content className={styles.content}>
          <ContentContainer {...contentContainerProps} />
        </Content>
        <Footer className={styles.footer}>
          <FooterContainer {...footerContainerProps} />
        </Footer>
      </Layout>
    </Layout>
  )
}
