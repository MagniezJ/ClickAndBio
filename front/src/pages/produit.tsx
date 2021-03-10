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
       <Layout style={{ height: '100vh', overflow: 'hidden'}}>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to={'/'}></Link>Home</Menu.Item>
        <Menu.Item key="2"><Link to={'/Produit'}></Link>Produit</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
    
      <Layout className="site-layout-background">
        <Sider className="site-layout-background" style={{height: '350px'}} width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '350px' }}
          >
                <Menu.Item key="1">fruit & Legumes</Menu.Item>
                <Menu.Item key="2">Boissons</Menu.Item>
                <Menu.Item key="3">Epicerie Salée</Menu.Item>
                <Menu.Item key="4">Epicerie Sucré</Menu.Item>
                <Menu.Item key="5">Produit Frais</Menu.Item>
                <Menu.Item key="6">Sans Gluten</Menu.Item>
                <Menu.Item key="7">Vegan</Menu.Item>
       
          </Menu>
        </Sider>
        <Content className="top" style={{ padding: '0 24px', minHeight: 280 }}><div id="container-carte" className="container-carte">
         
      </div></Content>
      </Layout>
    </Content>
  </Layout>,
  </div>
  
  );
  }

  export default Produit;
