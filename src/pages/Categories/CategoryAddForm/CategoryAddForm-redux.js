import React from 'react';
import {Button, Form, Input, Radio} from "antd";
import {connect} from "react-redux";
import {addCategory, setActiveAddCategoryType} from "../../../store/actions";


const mapDispatchToProps = (dispatch) => {
  return {
    addCategory: (category) => {
      dispatch(addCategory(category))
    },
    setActiveAddCategoryType: (categoryType) => {
      dispatch(setActiveAddCategoryType(categoryType))
    }
  }
};

class CategoryAddForm extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (err) return;
      const category = {
        name: values.category,
        type: values.categoryType
      };
      this.props.addCategory(category);
      this.props.form.resetFields(['category']);
    })
  };

  onCategoryTypeChange = (event) => {
    this.props.setActiveAddCategoryType(event.target.value);
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Form layout="inline" onSubmit={this.onSubmit}>
          <Form.Item>
            {
              getFieldDecorator('categoryType', {
                initialValue: 'outcome',
              })(
                <Radio.Group buttonStyle="solid" onChange={this.onCategoryTypeChange}>
                  <Radio.Button value="outcome">Outcome</Radio.Button>
                  <Radio.Button value="income">Income</Radio.Button>
                </Radio.Group>
              )
            }
          </Form.Item>
          <Form.Item label="Category:">
            {
              getFieldDecorator('category', {
                rules: [{required: true, message: 'Required!'}],
              })(
                <Input
                  placeholder="Category name"
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

const WrappedCategoryAddForm = Form.create({})(CategoryAddForm);

export default connect(null, mapDispatchToProps)(WrappedCategoryAddForm);
