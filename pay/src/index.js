import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Link, Redirect } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './index.css'
import HeaderBar from './common/header'
import MemberLayout from './containers/layout/memberLayout'
import MerchantLayout from './containers/layout/merchantLayout'
import OrderCheckingLayout from './containers/layout/orderCheckingLayout'
import SystemManagementLayout from './containers/layout/systemManagementLayout'

// const {SubMenu} = Menu
// const {Header, Content, Sider} = Layout

class App extends React.Component {

  render () {
    return (
      <BrowserRouter>
        <div id="musicApp">
          <HeaderBar/>
          <Switch>
            <Route path="/" exact component={MemberLayout}/>
            <Route path="/member" component={MemberLayout}/>
            <Route path="/merchant" component={MerchantLayout}/>
            <Route path="/orderChecking" component={OrderCheckingLayout}/>
            <Route path="/systemManagement" component={SystemManagementLayout}/>
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
