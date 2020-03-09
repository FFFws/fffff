/** 
 * @顶部导航
 * 点击登出，退出界面
 * 从状态管理内获取数据（过滤出状态为未读的信息数量），显示小标，未读信息，点击跳转页面
 * 
 * */

import { Menu, Dropdown, Icon, message, Popconfirm, Badge } from 'antd';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { UserLogout } from '../../api/user'
import { clearStorage } from '../../utils/storage'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../store/actionCreator'
import state from '../../store/state';
const menuData = [
    { path: '/admin/userinfo', name: '个人中心', icon: 'user' },
    { path: '/admin/info', name: '我的消息', icon: 'home', type: 'bad' },
    { path: '/login', name: '退出登录', icon: 'user' }
]
class HeaderDropdown extends Component {
    toggle(e) {
        switch (e.key) {
            case '/admin/userinfo':
                message.success('跳转个人中心', 2)
                break;
            case '/admin/info':
                message.success('跳转我的消息', 1, () => {
                    this.props.history.push(e.key)
                })
                break;
            case '/login':
                message.success('退出成功', 1, this.logout(e.key))
                break;
        }
    }
    logout(url) {
        UserLogout()
            .then(data => {
                clearStorage()
                this.props.history.replace(url)
            })
    }
    renderNav = (menuData) => {
        return (
            <Menu onClick={(e) => { this.toggle(e) }}>
                {menuData.map((item) => {
                    if (item.type) {
                        return (
                            <Menu.Item key={item.path}>
                                {/* <span> */}
                                <Badge
                                    count={this.props.num}
                                >
                                    <Icon type={item.icon}></Icon>
                                    <span>{item.name}</span>
                                </Badge>

                                {/* </span> */}
                            </Menu.Item>
                        )
                    } else {
                        return (
                            <Menu.Item key={item.path}>
                                {/* <span> */}
                                <Icon type={item.icon}></Icon>
                                <span>{item.name}</span>
                                {/* </span> */}
                            </Menu.Item>
                        )
                    }
                })}
            </Menu>
        )
    }
    render() {
        let { num } = this.props
        return (
            <Dropdown overlay={this.renderNav(menuData)}>
                <div style={{ marginRight: 40 }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Badge count={num}>{localStorage.getItem('userName')} <Icon type="down" /></Badge>
                </div>
            </Dropdown>
        )
    }
}

export default connect(
    state => {
        let num = (state.list.filter((item) => {
            return item.bool == true
        })).length
        return { num: num }
    },
    (dispatch) => {
        return bindActionCreators(actionCreator, dispatch)
    }
)(withRouter(HeaderDropdown))