import React, { Component, } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actionCreator from '../../store/actionCreator'
import { List, Typography, Spin, Icon, Alert } from 'antd';

class Info extends Component {
    render() {
        let { list, changebool, changeAllbool, status } = this.props
        return (
            <div>
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                    <span>个人消息</span>
                    {status ? <Spin /> : ''}
                    {list.some((item) => {
                        return item.bool === true
                    }) ? <button onClick={() => {
                        changeAllbool()
                    }}>全部标记为已读</button> : ''}

                </div>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (
                        <List.Item>
                            <Typography.Text mark>{item.type}</Typography.Text> {item.info}
                            {item.bool ? <button onClick={() => {
                                changebool(index)

                            }}>标记为已读</button> : <span>已读</span>}
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}
export default connect(state => state, (dispatch) => {
    return bindActionCreators(actionCreator, dispatch)
})(Info)

//个人消息渲染页面
// 1. 获取数据存到stote1111111111111111
// 2. 渲染111111111111
// 3. 根据状态确定是否标记，以及已读按钮11111111111111
// 4. 点击按钮，设置为已读——状态切换过程中，有加载显示11111111111111111
// 5. 全部已读11111
// 6. 个人信息处显示小标1111111111111111
// 7. 一键清空11111111111111