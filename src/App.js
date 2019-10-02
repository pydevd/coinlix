import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Layout} from 'antd';
import AppSider from "./components/AppSider";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Categories from "./pages/Categories";

import s from "./App.module.css";
import Accounts from "./pages/Accounts";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout className={s.app}>
      <BrowserRouter>
        <AppSider/>
        <Layout>
          <Header style={{padding: 0}}/>
          <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>

            <Route component={Home} path="/home"/>
            <Route component={Accounts} path="/accounts"/>
            <Route component={Categories} path="/categories"/>
            <Route component={Settings} path="/settings"/>

          </Content>
          <Footer className={s.footer}>2019(c)</Footer>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
