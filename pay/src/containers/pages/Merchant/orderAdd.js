// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React,{Component} from "react"
import { Link} from "react-router-dom";
import './order.css';
import './orderAdd.css';


import {
  Select,
  Form,
  Layout,
  Menu,
  Upload,
  message,
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

  handleChange = (info) => {
    let fileList = info.fileList;
    console.log(fileList);


    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1);

    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }

  }



  componentDidMount() {
  }


  render() {
    const { pagination, loading } = this.state;

    const { setting } = this.props;

    const props = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange: this.handleChange,
    };

    const props1 = {
      name: 'file',
      action: '//jsonplaceholder.typicode.com/posts/',
      headers: {
        authorization: 'authorization-text',
      },
      onChange: this.handleChange,
    };



    return (
      <div className="add">
        <form className="form1" action="" method="post">
          <ul className="left">
            <li>
              <label><i>* </i>手机号</label>
              <Input className="search_input" size="default" placeholder="请输入手机号" />
            </li>
            <li>
              <label><i>* </i>商户名称</label>
              <Input className="search_input" size="default" placeholder="请输入商户名称" />
            </li>
            <li>
              <label><i>* </i>商户简称</label>
              <Input className="search_input" size="default" placeholder="请输入商户简称" />
            </li>
            <li>
              <label><i>* </i>商户联系人名称</label>
              <Input className="search_input" size="default" placeholder="商户联系人名称" />
            </li>
            <li>
              <label className="unrequired">AppId</label>
              <Input className="search_input" size="default" placeholder="AppId" />
            </li>
            <li>
              <label><i>* </i>法人姓名</label>
              <Input className="search_input" size="default" placeholder="请输入法人姓名" />
            </li>
            <li>
              <label className="unrequired">法人证件类型</label>
              <div className="search_input">
                <Select defaultValue="身份证" style={{ width: 200 }} onChange={handleChange} size="default">
                  <Option value="身份证">身份证</Option>
                </Select>
              </div>
            </li>
            <li>
              <label className="unrequired">账户类型</label>
              <div className="search_input">
                <Select defaultValue="对公账户" style={{ width: 200 }} onChange={handleChange} size="default">
                  <Option value="对公账户">对公账户</Option>
                  <Option value="对私账户">对私账户</Option>
                </Select>
              </div>
            </li>
            <li>
              <label><i>* </i>卡号</label>
              <Input className="search_input" size="default" placeholder="请输入卡号" />
            </li>
            <li>
              <label><i>* </i>公司名称</label>
              <Input className="search_input" size="default" placeholder="请输入公司名称" />
            </li>
            <li>
              <label><i>* </i>开户身份证号</label>
              <Input className="search_input" size="default" placeholder="请输入开户身份证号" />
            </li>
            <li>
              <label><i>* </i>开户支行名称</label>
              <Input className="search_input" size="default" placeholder="请输入开户支行名称" />
            </li>
            <li>
              <label><i>* </i>支行所在省</label>
              <Input className="search_input" size="default" placeholder="请输入支行所在省" />
            </li>
            <li>
              <label className="unrequired">商户所属代理商编号</label>
              <div className="search_input">
                <Select defaultValue="未认证" style={{ width: 200 }} onChange={handleChange} size="default">
                  <Option value="未认证">未认证</Option>
                  <Option value="认证中">认证中</Option>
                  <Option value="已认证">已认证</Option>
                </Select>
              </div>
            </li>
            <li>
              <label className="unrequired">清算类型</label>
              <div className="search_input">
                <Select defaultValue="D0" style={{ width: 200 }} onChange={handleChange} size="default">
                  <Option value="D0">D0</Option>
                  <Option value="T1">T1</Option>
                  <Option value="D1">D1</Option>
                  <Option value="DN">DN</Option>
                </Select>
              </div>
            </li>
            <li>
              <label className="unrequired">实时出款比例(%)</label>
              <Input className="search_input" size="default" placeholder="请输入实时出款比例(%)" />
            </li>
            <li>
              <label><i>* </i>T1清算手续费(元)</label>
              <Input className="search_input" size="default" placeholder="请输入T1清算手续费" />
            </li>
            <li>
              <label><i>* </i>主营业务</label>
              <Input className="search_input" size="default" placeholder="请输入主营业务" />
            </li>
            <li>
              <label><i>* </i>注册地址</label>
              <Input className="search_input" size="default" placeholder="请输入注册地址" />
            </li>
            <li>
              <label className="unrequired">联系人所在市</label>
              <Input className="search_input" size="default" placeholder="请输入联系人所在市" />
            </li>
            <li>
              <label className="unrequired">微信经营类目</label>
              <Input className="search_input" size="default" placeholder="请输入微信经营类目" />
            </li>
            <li>
              <label className="unrequired">法人证件照片</label>
              <Upload {...props}>
                <Button>
                  <Icon type='upload'/> 上传
                </Button>
              </Upload>
            </li>
            <li>
              <label className="unrequired">企业开户许可证</label>
              <Upload {...props1}>
                <Button>
                  <Icon type='upload'/> 上传
                </Button>
              </Upload>
            </li>
            <li>
              <label className="unrequired">税务登记证</label>
              <Input className="search_input" size="default" placeholder="请输入税务登记证" />
            </li>
            <li>
              <label className="unrequired">企业营业执照</label>
              <Input className="search_input" size="default" placeholder="请输入企业营业执照" />
            </li>
            <li>
              <label className="unrequired">门店照片1</label>
              <Input className="search_input" size="default" placeholder="请输入门店照片1" />
            </li>
            <li>
              <label className="unrequired">门店照片3</label>
              <Input className="search_input" size="default" placeholder="请输入门店照片3" />
            </li>
          </ul>
          <ul className="right">
            <li>
              <label><i>* </i>营业执照编号</label>
              <Input className="search_input" size="default" placeholder="请输入营业执照编号" />
            </li>
            <li>
              <label className="unrequired">联系人邮箱</label>
              <Input className="search_input" size="default" placeholder="请输入联系人邮箱" />
            </li>
            <li>
              <label><i>* </i>商户联系人电话</label>
              <Input className="search_input" size="default" placeholder="请输入商户联系人电话" />
            </li>
            <li>
              <label className="unrequired">微信公众号授权目录</label>
              <Input className="search_input" size="default" placeholder="请输入微信公众号授权目录" />
            </li>
            <li>
              <label><i>* </i>法人联系电话</label>
              <Input className="search_input" size="default" placeholder="请输入法人联系电话" />
            </li>
            <li>
              <label><i>* </i>法人证件号码</label>
              <Input className="search_input" size="default" placeholder="请输入法人证件号码" />
            </li>
            <li>
              <label><i>* </i>客服电话</label>
              <Input className="search_input" size="default" placeholder="请输入客服电话" />
            </li>
            <li>
              <label><i>* </i>开户银行</label>
              <div className="search_input">
                <Select defaultValue=" " style={{ width: 200 }} onChange={handleChange} size="default">
                  <Option value="工商银行">工商银行</Option>
                  <Option value="农业银行">农业银行</Option>
                  <Option value="中国建设银行">中国建设银行</Option>
                  <Option value="招商银行">招商银行</Option>
                  <Option value="交通银行">交通银行</Option>
                  <Option value="中国银行">中国银行</Option>
                  <Option value="中国邮政储蓄银行">中国邮政储蓄银行</Option>
                  <Option value="上海浦东发展银行">上海浦东发展银行</Option>
                  <Option value="天津银行">天津银行</Option>
                  <Option value="中信银行">中信银行</Option>
                </Select>
              </div>
            </li>
            <li>
              <label><i>* </i>银行卡所属真实姓名</label>
              <Input className="search_input" size="default" placeholder="请输入银行卡所属真实姓名" />
            </li>
            <li>
              <label><i>* </i>银行预留手机号</label>
              <Input className="search_input" size="default" placeholder="请输入银行预留手机号" />
            </li>
            <li>
              <label><i>* </i>收款行行号</label>
              <Input className="search_input" size="default" placeholder="请输入收款行行号" />
            </li>
            <li>
              <label><i>* </i>支行所在市</label>
              <Input className="search_input" size="default" placeholder="请输入支行所在市" />
            </li>
            <li>
              <label className="unrequired">联行号查询地址</label>
              <Input className="search_input" size="default" placeholder="请输入联行号查询地址" />
            </li>
            <li>
              <label className="unrequired">代付单笔手续费</label>
              <Input className="search_input" size="default" placeholder="请输入代付单笔手续费" />
            </li>
            <li>
              <label><i>* </i>税务登记号</label>
              <Input className="search_input" size="default" placeholder="请输入税务登记号" />
            </li>
            <li>
              <label><i>* </i>经营范围</label>
              <Input className="search_input" size="default" placeholder="请输入经营范围" />
            </li>
            <li>
              <label className="unrequired">联系人所在省</label>
              <Input className="search_input" size="default" placeholder="请输入联系人所在省" />
            </li>
            <li>
              <label className="unrequired">联系人所在区/县</label>
              <Input className="search_input" size="default" placeholder="请输入联系人所在区/县" />
            </li>
            <li>
              <label className="unrequired">qq经营类目</label>
              <Input className="search_input" size="default" placeholder="请输入qq经营类目" />
            </li>
            <li>
              <label className="unrequired">证件反面照</label>
              <Input className="search_input" size="default" placeholder="请输入证件反面照" />
            </li>
            <li>
              <label className="unrequired">组织机构代码证件</label>
              <Input className="search_input" size="default" placeholder="请输入组织机构代码证件" />
            </li>
            <li>
              <label className="unrequired">特殊登记证</label>
              <Input className="search_input" size="default" placeholder="请输入特殊登记证" />
            </li>
            <li>
              <label className="unrequired">门店照片2</label>
              <Input className="search_input" size="default" placeholder="请输入门店照片2" />
            </li>
            <li>
              <label className="unrequired">门店照片4</label>
              <Input className="search_input" size="default" placeholder="请输入门店照片4" />
            </li>
          </ul>
        </form>
      </div>
    );
  }
}
