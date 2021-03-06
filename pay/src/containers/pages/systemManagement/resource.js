// import React from "react";
// import { bindActionCreators } from "redux";
// import { connect } from "react-redux";
// import { Link, browserHistory } from "react-router";

import React from "react"
import { Link} from "react-router-dom";
// import "./memberCard.css";

import {
  Select,
  Form,
  Modal,
  InputNumber,
  TreeSelect,
  Layout,
  Menu,
  Icon,
  Dropdown,
  Divider,
  Button,
  DatePicker,
  Radio,
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
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { TextArea } = Input;

//树选择数据
const treeData = [{
  title: '总裁办',
  value: '0-0',
  key: '0-0',
},{
  title: '技术部',
  value: '0-1',
  key: '0-1',
  children: [{
    title: '测试组',
    value: '0-1-1',
    key: '0-1-1',
  }],
}, {
  title: '产品部',
  value: '0-2',
  key: '0-2',
}];

//弹出框
const CollectionCreateForm = Form.create()(
  class extends React.Component {
    //树选择
    state = {
      value: undefined,
    }

    onChange = (value) => {
      console.log(value);
      this.setState({ value });
    }
    //
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }

    normFile = (e) => {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 14 },
      };
      return (
        <Modal
          visible={visible}
          title="添加资源"
          okText="添加"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="资源名称"
          >
            {getFieldDecorator('nickname', {
              rules: [
                { required: true, message: '请输入资源名称!' },
              ],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="资源类型"
          >
            {getFieldDecorator('select', {
            })(
              <Select placeholder="">
                <Option value="菜单">菜单</Option>
                <Option value="按钮">按钮</Option>
              </Select>
            )}
          </FormItem>


          <FormItem
            {...formItemLayout}
            label="资源路径"
          >
            {getFieldDecorator('nickname1', {
              rules: [
                { required: true, message: '请输入资源路径!' },
              ],
            })(
              <Input />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="排序"
            >
            {getFieldDecorator('input-number', { initialValue: 3 })(
              <InputNumber min={1} max={100} />
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="菜单图标"
          >
            <Input />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="状态"
          >
            {getFieldDecorator('select1', {
            })(
              <Select placeholder="">
                <Option value="正常">正常</Option>
                <Option value="停用">停用</Option>
              </Select>
            )}
          </FormItem>


          <FormItem
            {...formItemLayout}
            label="地址"
          >
            <Input />
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="上级资源"
          >
            {getFieldDecorator('select2', {
            })(
              <TreeSelect
                value={this.state.value}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Please select"
                treeDefaultExpandAll
                onChange={this.onChange}
              />
            )}
          </FormItem>

        </Form>
      </Modal>
      );
    }
  }
);



function handleChange(value) {
  console.log(`selected ${value}`);
}
//rangepicker
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}



const columns = [{
  title: '编号',
  dataIndex: 'num',
  key: 'num',
}, {
  title: '部门',
  dataIndex: 'section',
  key: 'section',
  width: '14.2%',
}, {
  title: '排序',
  dataIndex: 'sort',
  width: '14.2%',
  key: 'sort',
}, {
  title: '图标',
  dataIndex: 'icon',
  key: 'icon',
  width: '14.2%',
}, {
  title: '创建时间',
  dataIndex: 'time',
  width: '14.2%',
  key: 'time',
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
  width: '14.2%',
}, {
  title: '操作',
  width: '14.2%',
  render: (text, record ) => (
    <span  key={record.id}>
      <a href="#">Delete</a>
    </span>
  )
}];

const data = [{
  key: 1,
  num: '1',
  section: '技术部',
  sort: '1',
  icon: '图标',
  time: '2018-11-9 14:00:00',
  address: '海淀五路居',
  children: [{
    key: 11,
    num: '2',
    section: '测试组',
    sort: '2',
    icon: '图标',
    time: '2018-11-9 14:00:00',
    address: '海淀五路居',
  }, {
    key: 12,
    num: '3',
    section: '测试组',
    sort: '3',
    icon: '图标',
    time: '2018-11-9 14:00:00',
    address: '海淀五路居',
  }, {
    key: 13,
    num: '4',
    section: '测试组',
    sort: '4',
    icon: '图标',
    time: '2018-11-9 14:00:00',
    address: '海淀五路居',
  }],
}, {
  key: 2,
  num: '5',
  section: '总裁办',
  sort: '5',
  icon: '图标',
  time: '2018-11-9 14:00:00',
  address: '海淀五路居',
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

  //弹出框
    state = {
      visible: false,
    };

    showModal = () => {
      this.setState({ visible: true });
    }

    handleCancel = () => {
      this.setState({ visible: false });
    }

    handleCreate = () => {
      const form = this.formRef.props.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }

        console.log('Received values of form: ', values);
        form.resetFields();
        this.setState({ visible: false });
      });
    }

    saveFormRef = (formRef) => {
      this.formRef = formRef;
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
      <div className="apple_bottom">
        <h1>
          列表区
          <Button type="primary" className="search_btn2" onClick={this.showModal}>新增</Button>
          <CollectionCreateForm
            wrappedComponentRef={this.saveFormRef}
            visible={this.state.visible}
            onCancel={this.handleCancel}
            onCreate={this.handleCreate}
          />
        </h1>

        <Table dataSource={data} columns={columns} />
      </div>
    );
  }
}
