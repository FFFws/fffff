import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import { getNav } from './asiderFun'
const { SubMenu } = Menu;
class AsiderNav extends Component {
    constructor() {
        super()
        this.state = {
            navList: []
        }
    }
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
    componentDidMount() {
        let info = JSON.parse(localStorage.getItem('info'))
        getNav(info).then(data => {
            this.setState({ navList: data })
        })
    }
    renderNav(list) {
        console.log(list)
        list.map((item, index) => {

        })
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
                    position: 'fixed',
                    left: 0,
                    width: 200,
                }}>
                {this.renderNav(navList)}
            </Menu>
        );
    }
}
export default AsiderNav