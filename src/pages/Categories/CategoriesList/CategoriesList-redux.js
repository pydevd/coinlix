import React from 'react';
import {connect} from "react-redux";
import {Button, Icon, List} from "antd";

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    activeAddCategoryType: state.activeAddCategoryType,
  }
};

class CategoriesList extends React.Component {

  render() {
    const {categories, activeAddCategoryType} = this.props;
    return (
      <List
        size="small"
        bordered
        itemLayout="horizontal"
        dataSource={categories.filter(category => category.type === activeAddCategoryType)}
        renderItem={item => (
          <List.Item
            actions={[<Button type="link"><Icon type="delete"/></Button>]}
          >
            {item.name}
          </List.Item>
        )}

      />
    )
  }
}

export default connect(mapStateToProps)(CategoriesList);
