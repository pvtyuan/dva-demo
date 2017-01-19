import React from "react";
import {Layout, Table, Card} from "antd";
import styles from "./ContentContainer.less"

const Content = Layout.Content;

export default () => {

  const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];



  return (
    <div className={styles.container}>
      <Card title="Card title" extra={<a href="#">More</a>} style={{width: 300}}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Table dataSource={dataSource} columns={columns}/>
    </div>
  )
}
