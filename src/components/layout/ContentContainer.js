import React from "react";
import {Layout} from "antd";
import styles from "./ContentContainer.less"

const Content = Layout.Content;

export default () => {
  return (
    <Content>
      <div className={styles.content}></div>
    </Content>
  )
}
