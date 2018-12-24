// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React from "react"
import { Link} from "react-router-dom";
// import "./memberCard.css";


import {
  Button,
  DatePicker,
  Table,
  Input
} from "antd";



// import "../less/index.css";

// const { Header, Sider, Content } = Layout;


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
  title:'序号',
  dataIndex: 'id',
  key: 'id'

}, {
  title: '会员名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '会员时间',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '会员对象',
  dataIndex: 'obj',
  key: 'obj',
}, {
  title: '手机号',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '创建时间',
  dataIndex: 'addTime',
  key: 'addTime',
}, {
  title: '操作',
  key: 'action',
  render: (text, record ) => (
    <span  key={record.id}>
      <a href="#">Delete</a>
    </span>
  )
}];

export default class MemberCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  onChange(date, dateString){
    console.log(date, dateString);
  }


  componentDidMount() {
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
            <span>会员名称</span>
            <Input className="search_input" size="large" placeholder="会员名称" />
          </li>
          <li>
            <span>会员时间</span>
            <DatePicker size="large" className="search_input" onChange={this.onChange} />
          </li>
          <li>
            <span>会员对象</span>
            <Input className="search_input" size="large" placeholder="会员对象" />
          </li>
          <li>
            <span>手机号</span>
            <Input className="search_input" size="large" placeholder="手机号" />
          </li>

        </ul>
        </div>
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
