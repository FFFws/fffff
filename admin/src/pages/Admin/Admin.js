import React, { Component } from 'react'
import AsiderNav from '../../components/Asider/AsiderNav'
import styles from './Admin.model.less'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content, Footer } = Layout;


class Admin extends Component {

    render() {
        return (
            <Layout className='Admin'>
                <Sider collapsed={false}>
                    <AsiderNav></AsiderNav>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                        />
                        头部
                        <button onClick={() => {
                            this.props.history.push('/login')
                        }}>去登录页面</button>
                    </Header>
                    <Content className='content'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                    <Footer>脚步</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default withRouter(Admin)