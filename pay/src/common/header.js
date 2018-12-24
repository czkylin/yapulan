import React from "react";
import { Menu } from "antd";
import classNames from "classnames";
import {Link } from "react-router-dom";
// import Member from '../slider/member';
// import MemberCard from '../Member/memberCard';

// import "./header.less";

export default class Header extends React.Component {
  render() {
    const className = this.props.className;
    let Cls = classNames("header", className);

    return (
      <div className={Cls}>
        <div className="logo"></div>
        <Menu
          className="trigger"
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ paddingLeft: '182px', lineHeight: '60px', background: 'rgba(22,219,203,1)', color: '#fff' }}
        >
          <Menu.Item key="1">
            <Link to="/member">
              <span style={{ marginLeft: 8, color: '#fff' }}>会员</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/merchant">
              <span style={{ marginLeft: 8, color: '#fff' }}>商户</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/orderChecking">
              <span style={{ marginLeft: 8, color: '#fff' }}>订单差错</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/systemManagement">
              <span style={{ marginLeft: 8, color: '#fff' }}>系统管理</span>
            </Link>
          </Menu.Item>{/**/}
        </Menu>
        <div>

        </div>
      </div>
    );
  }
}
