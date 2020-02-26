import React, { Component } from 'react'
import { Menu, Icon, message } from 'antd';
import { Link } from 'react-router-dom'
import { getNav } from './asiderFun'
import { getStorage } from '../../utils/storage'
const { SubMenu } = Menu;

class AsiderNav extends Component {
    constructor() {
        super()
        this.state = {
            navList: [],
            openKeys: ['sub1'],
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4']
        }
    }

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    componentDidMount() {
        if (getStorage()) {
            let info = getStorage()
            getNav(info).then(data => {
                this.setState({ navList: data })
            })
        }
    }
    renderNav(list) {
        if (!list.length) { return '暂无数据' }
        let result = list.map((item, index) => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.id}>
                        <Link to={item.path}>
                            <Icon type={item.icon || 'home'}></Icon>
                            <span>{item.name || '为加载出数据'}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu
                        key={item.id}
                        title={
                            <span>
                                <Icon type={item.icon || 'home'}></Icon>
                                <span>{item.name}</span>
                            </span>
                        }
                    >
                        {this.renderNav(item.children)}
                    </SubMenu>
                )
            }
        })
        return result
    }
    render() {
        let { navList } = this.state
        return (
            <Menu
                mode="inline"
                theme='dark'
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                }}>
                {this.renderNav(navList)}
            </Menu>
        );
    }
}
export default AsiderNav