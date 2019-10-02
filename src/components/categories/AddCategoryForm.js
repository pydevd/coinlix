import React from 'react';
import {connect} from 'react-redux'

import {Button, Form, Icon, Input, Radio} from "antd";
import CategoriesList from "./CategoriesList";
import {addCategory} from "../../store/actions";


class AddCategoryForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      if (err) return;
      const category = {
        name: values.category,
        type: values.categoryType
      };
      this.props.addCategory(category);
      this.props.form.resetFields(['category']);
    })
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Item>
            {
              getFieldDecorator('categoryType', {
                initialValue: 'outcome',
              })(
                <Radio.Group defaultValue="outcome" buttonStyle="solid">
                  <Radio.Button value="outcome">Outcome</Radio.Button>
                   <Radio.Button value="income">Income</Radio.Button>
                </Radio.Group>
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('category', {
                rules: [{required: true, message: 'Please, enter category!'}],
              })(
                <Input
                  prefix={<Icon type="plus-circle" style={{color: 'rgba(0,0,0,.25)'}}/>}
                  placeholder="Category"
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
        <CategoriesList filterByType={this.props.form.getFieldValue('categoryType')}/>
      </div>
    )
  }
}

const WrappedAddCategoryForm = Form.create({name: 'add_category'})(AddCategoryForm);


const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (category) => {
      dispatch(addCategory(category))
    }
  }
};

export default connect(null, mapDispatchToProps)(WrappedAddCategoryForm);