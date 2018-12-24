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


//弹出框内容
const CollectionCreateForm = Form.create()(
  class extends React.Component {
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
          title="添加角色"
          okText="添加"
          onCancel={onCancel}
          onOk={onCreate}
        >
        <Form onSubmit={this.handleSubmit}>
          <FormItem
            {...formItemLayout}
            label="角色名称"
          >
            {getFieldDecorator('nickname', {
              rules: [
                { required: true, message: '请输入角色名称!' },
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
            label="状态"
          >
            {getFieldDecorator('select', {
            })(
              <Select placeholder="">
                <Option value="正常">正常</Option>
                <Option value="停用">停用</Option>
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="备注"
          >
              <TextArea rows={4} />
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



const dataSource = [{
  id: '1',
  name: '超级管理员',
  sort: "0",
  describe: '超级管理员',
  state:"正常",
},{
  id: '2',
  name: '技术部经理',
  sort: "1",
  describe: '技术部经理',
  state:"停用",
}];

const columns = [{
  title:'id',
  dataIndex: 'id',
  key: '1'
}, {
  title: '名称',
  dataIndex: 'name',
  key: '2',
}, {
  title: '排序号',
  dataIndex: 'sort',
  key: '3',
}, {
  title: '描述',
  dataIndex: 'describe',
  key: '4',
}, {
  title: '状态',
  dataIndex: 'state',
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
      <div>
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

          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    );
  }
}
