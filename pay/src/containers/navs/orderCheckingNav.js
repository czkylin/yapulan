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
          defaultOpenKeys={['sub1']}
          mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>订单差错</span></span>}>
              <Menu.Item key="1"><Link to="/orderChecking/batch">对账批处理</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/orderChecking/result">对账结果</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/orderChecking/errorHandling">差错处理</Link></Menu.Item>{/**/}
            </SubMenu>
        </Menu>
      </div>


    );

  }
}
