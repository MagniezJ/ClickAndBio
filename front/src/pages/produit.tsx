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
            {/* <SubMenu key="sub1"  title="fruit & legumes"> */}

              {/* <Menu.Item key="2">origine</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item> */}
            {/* </SubMenu> */}
            {/* <SubMenu key="sub2"  title="subnav 2">
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
            </SubMenu> */}
          </Menu>
        </Sider>
        <Content className="top" style={{ padding: '0 24px', minHeight: 280 }}><div className="container-carte">
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
      </div></Content>
      </Layout>
    </Content>
  </Layout>,
  </div>
  
  );
  }

  export default Produit;
