// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React,{Component} from "react"
import { Link} from "react-router-dom";
import './order.css';


import {
  Select,
  Form,
  Layout,
  Menu,
  Icon,
  Dropdown,
  Divider,
  Button,
  DatePicker,
  Row,
  Col,
  Tooltip,
  Collapse,
  Table,
  Input
} from "antd";

import moment from "moment";

// import "../index.less";

// const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const Search = Input.Search;
const MenuItemGroup = Menu.ItemGroup;
const Panel = Collapse.Panel;
const FormItem = Form.Item;
//select
const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}
//rangepicker
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}



const dataSource = [{
  id: '1',
  name: 'John Brown',
  time: "1212-121321-113",
  obj: 'New York No. 1 Lake Park',
  phone:"1555555555",
  addTime:"4512-46464-46464"
},{
  id: '2',
  name: 'John Brown',
  time: "1212-121321-113",
  obj: 'New York No. 1 Lake Park',
  phone:"1555555555",
  addTime:"4512-46464-46464"
}];

const columns = [{
  title:'商户ID',
  dataIndex: 'id',
  key: '1'

}, {
  title: '外部商户号',
  dataIndex: 'name',
  key: '2',
}, {
  title: '商户名称',
  dataIndex: 'time',
  key: '3',
}, {
  title: '商户类型',
  dataIndex: 'obj',
  key: '4',
}, {
  title: '商户店铺类别',
  dataIndex: 'phone',
  key: '5',
}, {
  title: '主店铺商户编号',
  dataIndex: 'addTime',
  key: '6',
}, {
  title: '客服电话',
  dataIndex: 'addTime',
  key: '7',
}, {
  title: '结算户名',
  dataIndex: 'addTime',
  key: '8',
}, {
  title: '对公账户名',
  dataIndex: 'addTime',
  key: '9',
}, {
  title: '用户电话',
  dataIndex: 'addTime',
  key: '10',
}, {
  title: '认证状态',
  dataIndex: 'addTime',
  key: '11',
}, {
  title: '认证时间',
  dataIndex: 'addTime',
  key: '12',
}, {
  title: '操作',
  key: 'action',
  fixed: 'right',
  render: (text, record ) => (
    <span  key={record.id}>
      <a href="#">Delete</a>
    </span>
  )
}];

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: {
        current: 1,
        defaultPageSize: 10,
        showQuickJumper: true,
        showSizeChanger: true
      },
      loading: false
    };

  }

  onChange(date, dateString){
    console.log(date, dateString);
  }


  componentDidMount() {
    // console.log(this.props.match.path)
  }


  render() {



    return (
      <div>
        <div className="apple_top">
        <h1>
          查询区
          <Button type="primary" className="search_btn1">查询</Button>
        </h1>
        <ul className="search_ul">
          <li>
            <span>手机号：</span>
            <Input className="search_input" size="default" placeholder="请输入手机号" />
          </li>
          <li>
            <span>商户编号：</span>
            <Input className="search_input" size="default" placeholder="请输入商户编号" />
          </li>
          <li>
            <span>证件编号：</span>
            <Input className="search_input" size="default" placeholder="请输入证件编号" />
          </li>
          <li>
            <span>商户名称：</span>
            <Input className="search_input" size="default" placeholder="请输入商户名称" />
          </li>
        </ul>
        <ul className="search_ul">
          <li>
            <span>结算户名：</span>
            <Input className="search_input" size="default" placeholder="请输入结算户名" />
          </li>
          <li>
            <span>营业执照号：</span>
            <Input className="search_input" size="default" placeholder="请输入营业执照号" />
          </li>
          <li>
            <span>代理商编号：</span>
            <Input className="search_input" size="default" placeholder="请输入代理商编号" />
          </li>
          <li>
            <span>认证状态：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 138 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
        </ul>
        <ul className="search_bottom">
          <li>
            <span>外部商户编号：</span>
            <Input className="search_input" size="default" placeholder="请输入外部商户编号" />
          </li>
          <li>
            <span className="approve">认证时间：</span>
            <RangePicker onChange={onChange} />
          </li>
        </ul>
        </div>
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="merchant/orderAdd">
              <Button type="primary" className="search_btn2">新增商户</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 1500 }}/>
        </div>
      </div>
    );
  }
}
