import React from 'react'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import IconDemo from '../lib/icon/demo/icon.demo'
import ButtonDemo from '../lib/button/demo/button.demo'
import DialogDemo from '../lib/dialog/demo/dialog.demo'
import LayoutDemo from '../lib/layout/demo/layout.demo'
import App from "./App"

const Router: React.FunctionComponent = () => (
  <HashRouter>
    <App>
      <Switch>
        <Route path='/icon' component={IconDemo}/>
        <Route path='/button' component={ButtonDemo}/>
        <Route path='/dialog' component={DialogDemo}/>
        <Route path='/layout' component={LayoutDemo}/>
        <Redirect to='/layout'/>
      </Switch>
    </App>
  </HashRouter>
)

export default Router