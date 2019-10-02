import React from 'react';
import {Layout} from 'antd';
import AppSider from "./components/AppSider";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home";
import Settings from "./components/Settings";
import Categories from "./components/categories/Categories";

const {Header, Content, Footer} = Layout;

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <AppSider/>
        <Layout style={{marginLeft: 200}}>
          <Header style={{background: '#fff', padding: 0}}/>
          <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>

            <Route component={Home} path="/home"/>
            <Route component={Categories} path="/categories"/>
            <Route component={Settings} path="/settings"/>

          </Content>
          <Footer>2019(c)</Footer>
        </Layout>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
