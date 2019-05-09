import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'
import IconDemo from './lib/icon/demo/icon.demo';
import ButtonDemo from './lib/button/demo/button.demo';
import DialogDemo from './lib/dialog/demo/dialog.demo';
import LayoutDemo from './lib/layout/demo/layout.demo';
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
            <h3>组件</h3>
            <ul>
              <li>
                <NavLink to='/icon'>Icon 图标</NavLink>
              </li>
              <li>
                <NavLink to='/button'>Button 按钮</NavLink>
              </li>
              <li>
                <NavLink to='/dialog'>Dialog 对话框</NavLink>
              </li>
              <li>
                <NavLink to='/layout'>layout 布局</NavLink>
              </li>
            </ul>
          </Sider>
          <Content className={style.siteMain}>
            <Route path='/icon' component={IconDemo} />
            <Route path='/button' component={ButtonDemo} />
            <Route path='/dialog' component={DialogDemo} />
            <Route path='/layout' component={LayoutDemo} />
          </Content>
        </Layout>
        <Footer className={style.siteFooter}>
          &copy; CC 超
        </Footer>
      </Layout>
    </Router>
  , document.querySelector('#root'))
