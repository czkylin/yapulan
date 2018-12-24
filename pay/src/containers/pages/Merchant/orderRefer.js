// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React from "react"
import { Link} from "react-router-dom";
// import "../Member/memberCard.css";







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
  title:'订单编号',
  dataIndex: 'id',
  key: '1'

}, {
  title: '商户编号',
  dataIndex: 'name',
  key: '2',
}, {
  title: '上送商户编号',
  dataIndex: 'time',
  key: '3',
}, {
  title: '商户名称',
  dataIndex: 'obj',
  key: '4',
}, {
  title: '付款方式',
  dataIndex: 'phone',
  key: '5',
}, {
  title: '通道名称',
  dataIndex: 'addTime',
  key: '6',
}, {
  title: '创建时间',
  dataIndex: 'addTime',
  key: '7',
}, {
  title: '支付时间',
  dataIndex: 'addTime',
  key: '8',
}, {
  title: '退款时间',
  dataIndex: 'addTime',
  key: '9',
}, {
  title: '订单状态',
  dataIndex: 'addTime',
  key: '10',
}, {
  title: '退款状态',
  dataIndex: 'addTime',
  key: '11',
}, {
  title: '支付状态',
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
      <div className="orderRefer">
        <div className="apple_top" style={{ height: 288 }}>
        <h1>
          查询区
          <Button type="primary" className="search_btn1">查询</Button>
        </h1>

        <ul className="search_ul">
          <li>
            <span>商户编号：</span>
            <Input className="search_input" size="default" placeholder="请输入商户编号" />
          </li>
          <li>
            <span>订单编号：</span>
            <Input className="search_input" size="default" placeholder="请输入订单编号" />
          </li>
          <li>
            <span>外部订单编号：</span>
            <Input className="search_input" size="default" placeholder="请输入外部订单编号" />
          </li>
          <li>
            <span>第三方流水号：</span>
            <Input className="search_input" size="default" placeholder="请输入第三方流水号" />
          </li>
        </ul>
        <ul className="search_ul">
          <li>
            <span>支付状态：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span>清算状态：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span>代理商编号：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span>第三方订单号：</span>
            <Input className="search_input" size="default" placeholder="请输入第三方订单号" />
          </li>
        </ul>
        <ul className="search_ul">
          <li>
            <span>支付方式：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span className="approve">创建时间：</span>
            <RangePicker onChange={onChange} />
          </li>
          <li>
            <span>清算费率：</span>
            <Input className="search_input" size="default" placeholder="请输入清算费率" />
          </li>
          <li>
            <span>计费费率：</span>
            <Input className="search_input" size="default" placeholder="请输入计费费率" />
          </li>
        </ul>
        <ul className="search_ul">
          <li>
            <span>通道编号：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span className="approve">付款时间：</span>
            <RangePicker onChange={onChange} />
          </li>
          <li>
            <span>代付流水：</span>
            <Input className="search_input" size="default" placeholder="请输入清算费率" />
          </li>
          <li>
            <span></span>
            <Button type="primary" className="search_btn3">商户池订单统计</Button>
          </li>
        </ul>
        <ul className="search_ul">
          <li>
            <span>退款状态：</span>
            <div className="search_input">
              <Select defaultValue="未认证" style={{ width: 120 }} onChange={handleChange} size="default">
                <Option value="未认证">未认证</Option>
                <Option value="认证中">认证中</Option>
                <Option value="已认证">已认证</Option>
              </Select>
            </div>
          </li>
          <li>
            <span className="approve">交易金额：</span>
            <RangePicker onChange={onChange} />
          </li>
          <li>
            <span>上送商户编号：</span>
            <Input className="search_input" size="default" placeholder="请输入清算费率" />
          </li>
          <li>
            <span></span>
            <Button type="primary" className="search_btn3">代理商订单统计</Button>
          </li>
        </ul>
        </div>
        <div className="apple_bottom">
          <h1>
            列表区
            <Link to="apply/newCnsultation">
              <Button type="primary" className="search_btn2">新增商户</Button>
            </Link>

          </h1>

          <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 2000 }}/>
        </div>
      </div>
    );
  }
}
