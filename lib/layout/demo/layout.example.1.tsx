import React from 'react';
import { Layout, Header, Content, Footer, Sider } from '../layout';
import styles from './layout.example.scss';

const LayoutExample1: React.FunctionComponent =  () => {
  return (
    <>
      <div className={styles.demo1}>
        <h1>第一个例子</h1>
        <Layout style={{height: '500px'}} className={styles.lLayout}>
          <Header className={styles.lHeader}>Header</Header>
          <Content className={styles.lContent}>Content</Content>
          <Footer className={styles.lFooter}>Footer</Footer>
        </Layout>
      </div>
      <div className={styles.demo2}>
        <h1>第二个例子</h1>
        <Layout style={{height: '500px'}} className={styles.lLayout}>
          <Header className={styles.lHeader}>Header</Header>
          <Layout className={styles.lLLayout}>
            <Sider className={styles.lLAside}>Sider</Sider>
            <Content className={styles.lLContent}>Content</Content>
          </Layout>
          <Footer className={styles.lFooter}>Footer</Footer>
        </Layout>
      </div>
      <div className={styles.demo3}>
        <h1>第三个例子</h1>
        <Layout style={{height: '500px'}} className={styles.lLayout}>
          <Header className={styles.lHeader}>Header</Header>
          <Layout className={styles.lLLayout}>
            <Content className={styles.lLContent}>Content</Content>
            <Sider className={styles.lLAside}>Sider</Sider>
          </Layout>
          <Footer className={styles.lFooter}>Footer</Footer>
        </Layout>
      </div>
      <div className={styles.demo4}>
        <h1>第四个例子</h1>
        <Layout style={{height: '500px'}} className={styles.lLayout}>
          <Sider className={styles.lAside}>Sider</Sider>
          <Layout className={styles.lLLayout}>
            <Header className={styles.lLHeader}>Header</Header>
            <Content className={styles.lLContent}>Content</Content>
            <Footer className={styles.lLFooter}>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </>
  )
}

export default LayoutExample1