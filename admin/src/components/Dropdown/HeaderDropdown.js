import { Menu, Dropdown, Icon, message, Popconfirm } from 'antd';
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { UserLogout } from '../../api/user'
import { clearStorage } from '../../utils/storage'


const menuData = [
    { path: '', name: '个人信息', icon: 'user' },
    { path: '', name: '个人设置', icon: 'user' },
    { path: '', name: '退出登录', icon: 'user' },

]


class HeaderDropdown extends Component {
    toggle(e) {
        console.log(e)
        switch (e.key) {
            case '0':
                message.success('跳转个人中心', 2)
                break;
            case '1':
                message.success('跳转我的消息', 2)
                break;
            case '2':
                message.success('退出成功', 1, this.logout())
                break;
        }
    }
    logout() {
        UserLogout()
            .then(data => {
                clearStorage()
                this.props.history.replace('/login')
            })
    }
    renderNav = (menuData) => {
        return (
            <Menu onClick={(e) => { this.toggle(e) }}>
                {menuData.map((item, index) => {
                    return (
                        <Menu.Item key={index}>
                            <span>
                                <Icon type={item.icon}></Icon>
                                <span>{item.name}</span>
                            </span>
                        </Menu.Item>
                    )
                })}
            </Menu>
        )
    }
    render() {
        return (
            <Dropdown overlay={this.renderNav(menuData)}>
                <div style={{ marginRight: 40 }} className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    {localStorage.getItem('userName')} <Icon type="down" />
                </div>
            </Dropdown>
        )
    }
}

export default withRouter(HeaderDropdown) 
