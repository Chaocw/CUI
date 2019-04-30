import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import IconDemo from './lib/icon/icon.demo';
import ButtonExample from './lib/button/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import Layout from "./lib/layout/layout"
import Header from "./lib/layout/header"
import Sider from "./lib/layout/sider"
import Content from "./lib/layout/Content"
// @ts-ignore
import style from './example.scss'
import Footer from "./lib/layout/footer"

const logo = require('./logo.png');

ReactDOM.render(
    <Router>
      <Layout className={style.sitePage}>
        <Header className={style.siteHeader}>
          <div className={style.logo}>
            <img src={logo} width="48" height="48" alt=""/>
            <span> CUI </span>
          </div>
        </Header>
        <Layout>
          <Sider className={style.siteAside}>
            <h2>组件</h2>
            <ul>
              <li>
                <NavLink to='/icon'>Icon</NavLink>
              </li>
              <li>
                <NavLink to='/button'>Button</NavLink>
              </li>
              <li>
                <NavLink to='/dialog'>对话框</NavLink>
              </li>
              <li>
                <NavLink to='/layout'>layout</NavLink>
              </li>
            </ul>
          </Sider>
          <Content className={style.siteMain}>
            <Route path='/icon' component={IconDemo} />
            <Route path='/button' component={ButtonExample} />
            <Route path='/dialog' component={DialogExample} />
            <Route path='/layout' component={LayoutExample} />
          </Content>
        </Layout>
        <Footer className={style.siteFooter}>
          &copy; CC 超
        </Footer>
      </Layout>
    </Router>
  , document.querySelector('#root'))
