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
  name: 'admin',
  time: "admin",
  obj: '总经办',
  phone:"2015-12-06",
  addTime:"男",
  id1: '25',
  name1: '11111111111',
  time1: "超级管理员",
  obj1: '000',
  phone1:"用户",
  addTime1:"正常"
},{
  id: '2',
  name: 'csy',
  time: "csy",
  obj: '总经办',
  phone:"2015-12-06",
  addTime:"男",
  id1: '25',
  name1: '11111111111',
  time1: "超级管理员",
  obj1: '000',
  phone1:"用户",
  addTime1:"正常"
}];

const columns = [{
  title:'序号',
  dataIndex: 'id',
  key: 'id'
}, {
  title: '登录名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '姓名',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '所属部门',
  dataIndex: 'obj',
  key: 'obj',
}, {
  title: '创建时间',
  dataIndex: 'phone',
  key: 'phone',
}, {
  title: '性别',
  dataIndex: 'addTime',
  key: 'addTime',
},{
  title:'年龄',
  dataIndex: 'id',
  key: 'id1'
}, {
  title: '电话',
  dataIndex: 'name',
  key: 'name1',
}, {
  title: '角色',
  dataIndex: 'time',
  key: 'time1',
}, {
  title: '代理商编号',
  dataIndex: 'obj',
  key: 'obj1',
}, {
  title: '用户类型',
  dataIndex: 'phone',
  key: 'phone1',
}, {
  title: '状态',
  dataIndex: 'addTime',
  key: 'addTime1',
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
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="apply/newCnsultation">
              <Button type="primary" className="search_btn2">新增</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns}/>
        </div>
      </div>
    );
  }
}
