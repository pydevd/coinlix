import React from 'react';
import {connect} from "react-redux";
import {Button, Icon, List, Typography} from "antd";
import {groupBy} from "../../../utils";

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
  }
};

class AccountsList extends React.Component {

  render() {
    const groupedAccounts = groupBy(this.props.accounts, "type");

    const accountsLists = [];

    for (const type in groupedAccounts) {
      accountsLists.push(
        <List
          style={{
            marginTop: "10px"
          }}
          size="small"
          bordered
          itemLayout="horizontal"
          header={<Typography.Title level={4}>{type}</Typography.Title>}
          dataSource={groupedAccounts[type]}
          renderItem={item => (
            <List.Item
              actions={[<Button type="link"><Icon type="delete"/></Button>]}
            >
              {item.name}: ${item.balance.toFixed(2)}
            </List.Item>
          )}

        />
      );
    }

    return (
      <div>
        {accountsLists}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AccountsList);
