import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import SystemManagementNav from '../navs/systemManagementNav'
import Role from '../pages/systemManagement/role'
import User from '../pages/systemManagement/user'
import Section from '../pages/systemManagement/section'
import Resource from '../pages/systemManagement/resource'
import Bank from '../pages/systemManagement/bank'
import Key from '../pages/systemManagement/key'
import Risk from '../pages/systemManagement/risk'
// import MemberCard from '../pages/Member/memberCard'
// import BindingCard from '../pages/Member/bindingCard'
import '../../common/primaryLayout.css'
export default class MemberLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // console.log(this.props);
  }

  render() {


    return (
      <div className="primary-layout">
        <SystemManagementNav />
        <div className="primary-content">
          <Switch>
            <Route path="/systemManagement" exact component={Role} />
            <Route path="/systemManagement/role" component={Role} />
            <Route path="/systemManagement/user" component={User} />
            <Route path="/systemManagement/section" component={Section} />
            <Route path="/systemManagement/resource" component={Resource} />
            <Route path="/systemManagement/bank" component={Bank} />
            <Route path="/systemManagement/key" component={Key} />
            <Route path="/systemManagement/risk" component={Risk} />
          </Switch>
        </div>
      </div>


    );

  }
}
