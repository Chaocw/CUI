import React from 'react'
import Layout from '../layout'
import Footer from "../footer"
import Content from '../Content'
import Header from '../header'
import styles from './layout.example.scss'

export default function () {
  return (
    <div>
      <Layout style={{height: 300, width: 500}}>
        <Header className={styles.x}>header</Header>
        <Content className={styles.y}>content</Content>
        <Footer className={styles.x}>
          <button>footer</button>
        </Footer>
      </Layout>
    </div>
  )
}