import React from 'react'
import Layout from './layout'
import Footer from "./footer"
import Content from './Content'
import Header from './header'
import './layout.example.scss'
import Sider from "./sider"

export default function() {
  return (
    <div>
      <div>
        <h1>ex 1</h1>
        <Layout style={{height: 300, width: 500}} className={'hi'}>
          <Header className={'x'}>header</Header>
          <Content className={'y'}>content</Content>
          <Footer className={'x'}><button>footer</button></Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 2</h1>
        <Layout style={{height: 300, width: 500}} className={'hi'}>
          <Header className={'x'}>header</Header>
          <Layout>
            <Sider className={'z'}>sider</Sider>
            <Content className={'y'}>content</Content>
          </Layout>
          <Footer className={'x'}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 3</h1>
        <Layout style={{height: 300, width: 500}} className={'hi'}>
          <Header className={'x'}>header</Header>
          <Layout>
            <Sider className={'z'}>sider</Sider>
            <Content className={'y'}>content</Content>
            <Sider className={'z'}>sider</Sider>
          </Layout>
          <Footer className={'x'}>footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>ex 4</h1>
        <Layout style={{height: 300, width: 500 }} className={'hi'}>
          <Sider className={'z'}>sider</Sider>
          <Layout>
            <Header className={'x'}>header</Header>
            <Content className={'y'}>content</Content>
            <Footer className={'x'}>footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  )
}