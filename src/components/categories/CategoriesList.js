import React from 'react';
import {connect} from "react-redux";
import {Button, Icon, List} from "antd";


class CategoriesList extends React.Component {

  render() {
    const {categories, filterByType} = this.props;
    const filteredCategories = categories.filter(category => category.type === filterByType);
    return (
      <List
        size="small"
        bordered
        itemLayout="horizontal"
        dataSource={filteredCategories}
        renderItem={item => (
          <List.Item
            actions={[<Button type="link"><Icon type="delete" /></Button>]}
          >
            {item.name}
          </List.Item>
        )}

      />
    )
  }
}

const mapStateToProps = (state) => {
  return {categories: state.categories}
};

export default connect(mapStateToProps)(CategoriesList);
