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
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用户权限</span></span>}>
              <Menu.Item key="1"><Link to="/systemManagement/role">角色管理</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/systemManagement/user">用户管理</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/systemManagement/section">部门管理</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/systemManagement/resource">资源管理</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>参数管理</span></span>}>
              <Menu.Item key="5"><Link to="/systemManagement/bank">银行机构管理</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/systemManagement/key">商户密钥管理</Link></Menu.Item>
              <Menu.Item key="7"><Link to="/systemManagement/risk">风控规则管理</Link></Menu.Item>
            </SubMenu>
        </Menu>
      </div>


    );

  }
}
