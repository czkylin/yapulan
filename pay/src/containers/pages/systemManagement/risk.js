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
  title:'商户编号',
  dataIndex: 'id',
  key: '1'
}, {
  title: '商户角色',
  dataIndex: 'name',
  key: '2',
}, {
  title: '单笔限额 默认',
  dataIndex: 'time',
  key: '3',
}, {
  title: '当日笔数上限',
  dataIndex: 'obj',
  key: '4',
}, {
  title: '当日交易金额',
  dataIndex: 'phone',
  key: '5',
}, {
  title:'月总笔数上限',
  dataIndex: 'id',
  key: '6'
}, {
  title: '月交易金额上限',
  dataIndex: 'name',
  key: '7',
}, {
  title: '风控支付类型',
  dataIndex: 'time',
  key: '8',
}, {
  title: '商户角色',
  dataIndex: 'obj',
  key: '9',
}, {
  title: '交易总金额',
  dataIndex: 'phone',
  key: '10',
}, {
  title:'交易总次数',
  dataIndex: 'id',
  key: '11'
}, {
  title: '预警阈值金额',
  dataIndex: 'name',
  key: '12',
}, {
  title: '预警阈值次数',
  dataIndex: 'time',
  key: '13',
}, {
  title: '备注',
  dataIndex: 'obj',
  key: '14',
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
      <div>
        <div className="apple_top" style={{ height: 106 }}>
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
              <span>风控支付类型：</span>
              <div className="search_input">
                <Select defaultValue="请选择" style={{ width: 120 }} onChange={handleChange} size="default">
                  <Option value="全部">全部</Option>
                  <Option value="微信">微信</Option>
                  <Option value="支付宝">支付宝</Option>
                </Select>
              </div>
            </li>
          </ul>
        </div>
        <div className="apple_bottom">
          <h1>
            列表区
          </h1>

          <Table dataSource={dataSource} columns={columns} size="small" scroll={{ x: 2000 }}/>
        </div>
      </div>
    );
  }
}
