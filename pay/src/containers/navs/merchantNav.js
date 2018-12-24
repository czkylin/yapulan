import React from "react";
import {
  Menu,
  Icon,
} from "antd";
import {Link} from "react-router-dom";
const SubMenu = Menu.SubMenu;

export default class MerchantNav extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log(this.props);
  }

  render() {


    return (
      <div className="aside">

        <Menu
          onClick={this.handleClick}
          style={{ width: 182 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1', 'sub2']}
          mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>商户管理</span></span>}>
              <Menu.Item key="1"><Link to="/merchant/order">商户进件</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/merchant/charge">订单手续费设置</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/merchant/payParaManage">支付方式参数管理</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/merchant/payment">商户支付方式管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>业务查询</span></span>}>
              <Menu.Item key="5"><Link to="/merchant/merchantRefer">商户账单查询</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/merchant/withdrawRefer">提现查询</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/merchant/refundRefer">退款查询</Link></Menu.Item>
              <Menu.Item key="8"><Link to="/merchant/orderRefer">订单查询</Link></Menu.Item>
              <Menu.Item key="9"><Link to="/merchant/payRefer">支付费用查询</Link></Menu.Item>
            </SubMenu>
        </Menu>
      </div>


    );

  }
}
