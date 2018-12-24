import React from "react"
import { Link} from "react-router-dom";


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

const { Header, Sider, Content } = Layout;
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
  name: '根基代理商',
  state: "启用",
  time: '2016-11-25',
  updateTIme:"2018-11-11",
},{
  id: '2',
  name: '国信支付平台',
  state: "禁用",
  time: '2016-11-25',
  updateTIme:"2018-11-11",
}];

const columns = [{
  title:'渠道商编号',
  dataIndex: 'id',
  key: '1'

}, {
  title: '渠道商名称',
  dataIndex: 'name',
  key: '2',
}, {
  title: '状态',
  dataIndex: 'state',
  key: '3',
}, {
  title: '创建时间',
  dataIndex: 'time',
  key: '4',
}, {
  title: '更新时间',
  dataIndex: 'updateTIme',
  key: '5',
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
        <div className="apple_top" style={{ height: 106 }}>
          <h1>
            查询区
            <Button type="primary" className="search_btn1">查询</Button>
          </h1>
          <ul className="search_ul">
            <li>
              <span>代理商编号：</span>
              <Input className="search_input" size="default" placeholder="请输入代理商编号" />
            </li>
            <li>
              <span>代理商名称：</span>
              <Input className="search_input" size="default" placeholder="请输入代理商名称" />
            </li>
          </ul>
        </div>
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="apply/newCnsultation">
              <Button type="primary" className="search_btn2">添加</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns} size="small"/>
        </div>
      </div>
    );
  }
}
