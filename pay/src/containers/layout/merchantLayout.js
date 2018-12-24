import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import MerchantNav from '../navs/merchantNav'
import Order from '../pages/Merchant/order'
import OrderAdd from '../pages/Merchant/orderAdd'
import Charge from '../pages/Merchant/charge'
import PayParaManage from '../pages/Merchant/payParaManage'
import Payment from '../pages/Merchant/payment'
import MerchantRefer from '../pages/Merchant/merchantRefer'
import WithdrawRefer from '../pages/Merchant/withdrawRefer'
import RefundRefer from '../pages/Merchant/refundRefer'
import OrderRefer from '../pages/Merchant/orderRefer'
import PayRefer from '../pages/Merchant/payRefer'
import '../../common/primaryLayout.css'
export default class MerchantLayout extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props.match.url);
  }

  render() {


    return (
      <div className="primary-layout">
        <MerchantNav />
        <div className="primary-content">
          <Switch>
            <Route path="/merchant" exact component={Order} />
            <Route path="/merchant/order" component={Order} />
            <Route path="/merchant/orderAdd" component={OrderAdd} />
            <Route path="/merchant/charge" component={Charge} />
            <Route path="/merchant/payParaManage" component={PayParaManage} />
            <Route path="/merchant/payment" component={Payment} />
            <Route path="/merchant/merchantRefer" component={MerchantRefer} />
            <Route path="/merchant/withdrawRefer" component={WithdrawRefer} />
            <Route path="/merchant/refundRefer" component={RefundRefer} />
            <Route path="/merchant/orderRefer" component={OrderRefer} />
            <Route path="/merchant/payRefer" component={PayRefer} />
          </Switch>
        </div>
      </div>


    );

  }
}
