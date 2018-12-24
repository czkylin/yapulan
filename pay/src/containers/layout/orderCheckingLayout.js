import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import OrderCheckingNav from '../navs/orderCheckingNav'
import Batch from '../pages/orderChecking/batch'
import Result from '../pages/orderChecking/result'
import ErrorHandling from '../pages/orderChecking/errorHandling'
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
        <OrderCheckingNav />
        <div className="primary-content">
          <Switch>
            <Route path="/orderChecking" exact component={Batch} />
            <Route path="/orderChecking/batch" component={Batch} />
            <Route path="/orderChecking/result" component={Result} />
            <Route path="/orderChecking/errorHandling" component={ErrorHandling} />
          </Switch>
        </div>
      </div>


    );

  }
}
