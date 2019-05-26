import React from 'react'
import Layout from "../lib/layout/layout"
import Header from "../lib/layout/header"
import Sider from "../lib/layout/sider"
import Content from "../lib/layout/Content"
import style from './styles/example.scss'
import Footer from "../lib/layout/footer"
import {NavLink} from "react-router-dom"

const logo = require('../assets/logo.png')

interface Props extends React.HTMLAttributes<HTMLElement> {

}

const App: React.FunctionComponent<Props> = ({children}) => (
  <Layout className={style.sitePage}>
    <Header className={style.siteHeader}>
      <div className={style.logo}>
        <img src={logo} width="48" height="48" alt=""/>
        <span> CUI </span>
      </div>
    </Header>
    <Layout>
      <Sider className={style.siteAside}>
        <h3>组件</h3>
        <ul>
          <li>
            <NavLink to='/layout'>layout 布局</NavLink>
          </li>
          <li>
            <NavLink to='/icon'>Icon 图标12</NavLink>
          </li>
          <li>
            <NavLink to='/button'>Button 按钮</NavLink>
          </li>
          <li>
            <NavLink to='/dialog'>Dialog 对话框</NavLink>
          </li>
        </ul>
      </Sider>
      <Content className={style.siteMain}>
        {children}
      </Content>
    </Layout>
    <Footer className={style.siteFooter}>
      &copy; CC
    </Footer>
  </Layout>
)

export default App