import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
class AsiderNav extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    render() {
        return (
            <Menu
                mode="inline"
                theme='dark'
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    width: 200,
                }}>

                <Menu.Item key="1">
                    <Link to='/admin/home'>
                        <Icon type="home" />
                        <span>主页</span>
                    </Link>
                </Menu.Item>



                <Menu.Item key="2">
                    <Link to='/admin/setting'>
                    <Icon type="setting" />
                    <span>设置</span>
                    </Link>
                </Menu.Item>

                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>人员管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">111</Menu.Item>
                    <Menu.Item key="4">222</Menu.Item>
                    <Menu.Item key="5">333</Menu.Item>
                    <SubMenu key="sub5"
                        title={
                            <span>
                                <Icon type="user" />
                                <span>人员细分</span>
                            </span>
                        }>
                        <Menu.Item key="6">444</Menu.Item>
                        <Menu.Item key="8">444</Menu.Item>
                        <Menu.Item key="9">444</Menu.Item>
                    </SubMenu>

                </SubMenu>
            </Menu>
        );
    }
}
export default AsiderNav