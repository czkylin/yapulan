import React from "react";
import {
  Menu,
  Icon,
} from "antd";
import {Link} from "react-router-dom";
const SubMenu = Menu.SubMenu;

export default class MemberNav extends React.Component {
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
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>会员账户</span></span>}>
              <Menu.Item key="1"><Link to="/member/memberCard">会员卡查询</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/member/bindingCard">绑定卡查询</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>会员消费</span></span>}>
              <Menu.Item key="3"><Link to="/member/consumeInfo">消费统计</Link></Menu.Item>
            </SubMenu>
        </Menu>
      </div>


    );

  }
}
