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
  name: '工商银行',
  time: "ICBC",
  obj: '启用',
  addTime:"20161106"
},{
  id: '2',
  name: '农业银行',
  time: "ABC",
  obj: '启用',
  addTime:"20161125"
}];

const columns = [{
  title:'银行编号',
  dataIndex: 'id',
  key: 'id'

}, {
  title: '银行名称',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '银行代码',
  dataIndex: 'time',
  key: 'time',
}, {
  title: '状态',
  dataIndex: 'obj',
  key: 'obj',
}, {
  title: '更新时间',
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
