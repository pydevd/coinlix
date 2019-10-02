import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {NavLink} from "react-router-dom";
import s from "./AppSider.module.css";

function AppSider() {

  function getDefaultSelectedKeys() {
    const mapPathToMenuKey = {
      '/': '1',
      '/categories': '2',
      '/accounts': '3',
      '/settings': '4',
    };

    return [mapPathToMenuKey[window.location.pathname]];
  }

  return (
    <Layout.Sider
      style={{
        overflow: 'auto',
        height: '100vh',
      }}
    >
      <div className={s.logo}>CoinLix</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={getDefaultSelectedKeys()}>

        <Menu.Item key="1" style={{marginTop: 0}}>
          <NavLink to="/">
            <Icon type="user"/>
            <span className="nav-text">Home</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/categories">
            <Icon type="bars"/>
            <span className="nav-text">Categories</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="3">
          <NavLink to="/accounts">
            <Icon type="account-book" />
            <span className="nav-text">Accounts</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="4">
          <NavLink to="/settings">
            <Icon type="setting"/>
            <span className="nav-text">Settings</span>
          </NavLink>
        </Menu.Item>

      </Menu>
    </Layout.Sider>
  )
}

export default AppSider;