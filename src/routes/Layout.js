import React from 'react';
import {connect} from 'dva';
import styles from './Layout.less';
import {Layout} from "antd";
import SiderContainer from "../components/layout/SiderContainer";
import HeaderContainer from "../components/layout/HeaderContainer";
import ContentContainer from "../components/layout/ContentContainer";
import FooterContainer from "../components/layout/FooterContainer";

const {Content, Header, Footer, Sider} = Layout;

function DashBorad({children, location, dispatch, AppModel}) {
  const {username, showSider, siderFolded} = AppModel;

  const switchSider = () => {
    dispatch({type: "AppModel/switchSider"});
  };

  const foldSider = () => {
    dispatch({type: "AppModel/foldSider"});
  };

  const siderContainerProps = {
    location,
    showSider,
    siderFolded,
    foldSider,
  };

  const contentContainerProps = {
    username,
    location,
    inputValue: "ssss",
    content: children,
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
  );
}

function mapStateToProps({AppModel}) {
  return {AppModel};
}

export default connect(mapStateToProps)(DashBorad);
