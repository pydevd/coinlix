import React from 'react';
import {Typography} from "antd";
import AccountAddForm from "./AccountAddForm";
import AccountsList from "./AccountsList/AccountsList-redux";



const Accounts = () => {
  return (
    <div>
      <Typography.Title level={4}>Accounts</Typography.Title>
      <AccountAddForm/>
      <AccountsList/>
    </div>
  )
};

export default Accounts;