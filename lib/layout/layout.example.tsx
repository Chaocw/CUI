import React from 'react'
import Layout from './layout'
import Footer from "./footer"
import Content from './Content'
import Header from './header'
import './layout.example.scss'

export default function() {
  return (
    <div>
      <div>
        <h1>ex 1</h1>
        <Layout style={{height: 500, width: 500}} className={'hi'}>
          <Header className={'x'}>header</Header>
          <Content className={'y'}>content</Content>
          <Footer className={'x'}>footer</Footer>
        </Layout>
      </div>
    </div>
  )
}