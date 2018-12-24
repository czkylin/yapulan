import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import MemberNav from '../navs/memberNav'
import MemberCard from '../pages/Member/memberCard'
import BindingCard from '../pages/Member/bindingCard'
import ConsumeInfo from '../pages/Member/consumeInfo'
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
        <MemberNav />
        <div className="primary-content">
          <Switch>
            <Route path="/member" exact component={MemberCard} />
            <Route path="/member/memberCard" component={MemberCard} />
            <Route path="/member/bindingCard" component={BindingCard} />
            <Route path="/member/consumeInfo" component={ConsumeInfo} />
          </Switch>
        </div>
      </div>


    );

  }
}
