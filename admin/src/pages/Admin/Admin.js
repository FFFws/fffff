import React, { Component } from 'react'
import AsiderNav from '../../components/Asider/AsiderNav'
import './Admin.model.less'
import { withRouter } from 'react-router-dom'
import { Layout, Icon, Menu, message } from 'antd';
import HeaderDropdown from '../../components/Dropdown/HeaderDropdown'
import { getStorage } from '../../utils/storage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/actionCreator'
const { Header, Sider, Content, Footer } = Layout;


class Admin extends Component {
    constructor() {
        super()
        this.state = {
            collapsed: false,
        }
    }
    componentDidMount() {
        if (!getStorage()) {
            message.error('token失效，请重新登录', 1, () => {
                this.props.history.replace('/login')
            })
        }
    }
   
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <Layout className='Admin'>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <AsiderNav></AsiderNav>
                </Sider>
                <Layout>
                    <Header style={{
                        background: '#fff',
                        padding: 0
                    }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <h2 style={{ fontWeight: "bold", fontSize: 30 }}>喜来登酒店后台管理系统</h2>
                        <HeaderDropdown ></HeaderDropdown>
                    </Header>
                    <Content className='content'
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}>
                        {this.props.children}
                    </Content>
                    <Footer>脚步</Footer>
                </Layout>
            </Layout>
        );
    }
}
export default connect(state => state, (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)
})(withRouter(Admin))