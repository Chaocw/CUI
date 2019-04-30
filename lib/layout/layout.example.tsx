import React from 'react'
import Layout from './layout'
import Footer from "./footer"
import Content from './Content'
import Header from './header'
import styles from './layout.example.scss'
import Sider from "./sider"

export default function() {
  return (
    <div>
      <div>
        <h1>ex 1</h1>
        <Layout style={{height: 300, width: 500}}>
          <Header className={styles.x}>header</Header>
          <Content className={styles.y}>content</Content>
          <Footer className={styles.x}><button>footer</button></Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 2</h1>
        <Layout style={{height: 300, width: 500}}>
          <Header className={styles.x}>header</Header>
          <Layout>
            <Sider className={styles.z}>sider</Sider>
            <Content className={styles.y}>content</Content>
          </Layout>
          <Footer className={styles.x}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 3</h1>
        <Layout style={{height: 300, width: 500}}>
          <Header className={styles.x}>header</Header>
          <Layout>
            <Sider className={styles.z}>sider</Sider>
            <Content className={styles.y}>content</Content>
            <Sider className={styles.z}>sider</Sider>
          </Layout>
          <Footer className={styles.x}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 4</h1>
        <Layout style={{height: 300, width: 500 }}>
          <Sider className={styles.z}>sider</Sider>
          <Layout>
            <Header className={styles.x}>header</Header>
            <Content className={styles.y}>content</Content>
            <Footer className={styles.x}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}