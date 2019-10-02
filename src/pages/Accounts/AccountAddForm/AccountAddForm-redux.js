import React from 'react';
import {Button, Form, Icon, Input, Radio, InputNumber} from "antd";
import {connect} from "react-redux";
import {addAccount} from "../../../store/actions";


const mapDispatchToProps = (dispatch) => {
  return {
    addAccount: (category) => {
      dispatch(addAccount(category))
    },
  }
};

class AccountAddForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      const account = {
        name: values.accountName,
        type: values.accountType,
        balance: values.accountBalance,
      };
      this.props.addAccount(account);
      this.props.form.resetFields();
    })
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form layout="inline" onSubmit={this.onSubmit}>
          <Form.Item>
            {
              getFieldDecorator('accountType', {
                initialValue: 'cash',
              })(
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value="cash">Cash</Radio.Button>
                  <Radio.Button value="cc">Credit Card</Radio.Button>
                </Radio.Group>
              )
            }
          </Form.Item>
          <Form.Item label="Account name">
            {
              getFieldDecorator('accountName', {
                rules: [{required: true, message: 'Required!'}],
              })(
                <Input
                  placeholder="Account name"
                />,
              )
            }
          </Form.Item>
          <Form.Item label="Initial balance">
            {
              getFieldDecorator('accountBalance', {
                initialValue: 0.0,
                rules: [{required: true, message: 'Required!'}],
              })(
                <InputNumber
                  min={0.0} step={0.1}
                  prefix={<Icon type="plus-circle" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Initial balance"
                />,
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.onClick}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const WrappedAccountAddForm = Form.create({})(AccountAddForm);

export default connect(null, mapDispatchToProps)(WrappedAccountAddForm);
