import React, { FunctionComponent, useEffect} from 'react';
import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom';
import banane from '../imgs/banane.png';
import pomme from '../imgs/pomme.png';
import riz from '../imgs/riz.png';
import '../css/styles.css';
import '../css/reset.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Produit: FunctionComponent = () => {
 useEffect(() => {
  }, []);

  return (
  <div>
      <Layout style={{ height: '100vh', overflow: 'hidden' }}>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="../"><span>Accueil</span></Link></Menu.Item>
        <Menu.Item key="2">Pannier</Menu.Item>
        <Menu.Item key="3"></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', height: "92vh" }}>
      
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '85vh' }}
          >
            <SubMenu key="sub1"    title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2"  title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3"  title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content className="top" style={{ padding: '0 24px', minHeight: 280 }}>
            
        <div className="container-carte">
          <div className="carte">
              <span></span>
              <img src={pomme} alt=""/>
              <h1>Pomme</h1>
              <p></p>
          </div>
          <div className="carte">
              <span></span>
              <img src={banane} alt=""/>
              <h1>Banane</h1>
          </div>
          <div className="carte">
              <span></span>
              <img src={riz} alt=""/>
              <h1>Riz</h1>
          </div>
         
      </div>
        </Content>
      </Layout>
    </Content>
  
  </Layout>,
  </div>
  
  );
  }

  export default Produit;