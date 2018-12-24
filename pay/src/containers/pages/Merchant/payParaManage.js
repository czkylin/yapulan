// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React,{Component} from "react"
import { Link} from "react-router-dom";
import './order.css';


// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";


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
  describe: '现金收款',
  defau: "是",
  way: '现金收款',
  pass:"xx",
  rateT1:"0",
  rateD0:"0"
},{
  id: '2',
  describe: '微信被扫',
  defau: "否",
  way: '微信收款-被扫',
  pass:"x",
  rateT1:"0.24",
  rateD0:"0.26"
}];

const columns = [{
  title:'支付方式代码',
  dataIndex: 'id',
  key: '1'

}, {
  title: '支付方式描述',
  dataIndex: 'describe',
  key: '2',
}, {
  title: '是否默认开通',
  dataIndex: 'defau',
  key: '3',
}, {
  title: '支付方式名称',
  dataIndex: 'way',
  key: '4',
}, {
  title: '通道编号',
  dataIndex: 'pass',
  key: '5',
}, {
  title: 'T1费率',
  dataIndex: 'rateT1',
  key: '6',
}, {
  title: 'D0费率',
  dataIndex: 'rateD0',
  key: '7',
}, {
  title: '操作',
  key: 'action',
  render: (text, record ) => (
    <span  key={record.id}>
      <a href="#">Delete</a>
    </span>
  )
}];

export default class RoleManage extends React.Component {
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
  }


  render() {
    const { pagination, loading } = this.state;

    const { setting } = this.props;



    return (
      <div>
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="apply/newCnsultation">
              <Button type="primary" className="search_btn2">新增</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}
