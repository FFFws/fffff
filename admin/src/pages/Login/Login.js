/**
 * @登陆界面
 * 页面布局
 * 信息验证
 * 点击/回车事件提交信息，调取接口，取回token
 * 存储token，username
 * 
 * 七天免登录
 * 存token，存储时间，有效时间
 * 每次调取接口，先判断有效期，在携带token
 * */ 



import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, message } from 'antd';
import styles from './login.model.less'
import { UserLogin } from '../../api/user'
import { setStorage } from '../../utils/storage'

class Login extends Component {
    login(userName, passWord) {
        let { getFieldsValue, validateFields } = this.props.form
        validateFields((err, data) => {
            if (err) return message.error('输入有误，请重试', 2)

            let { userName, passWord } = data
            UserLogin(userName, passWord)
                .then(res => {
                    setStorage(res)
                    localStorage.setItem('userName', userName)
                    message.success('登陆成功，1s后跳转', 1, () => {
                        this.props.history.replace('/admin/home')
                    })
                })
                .catch(err => {
                    console.log(err)
                    message.error('登陆失败，请重试', 2)
                })
        })
    }
    render() {
        const { getFieldDecorator, getFieldsValue } = this.props.form;
        return (
            <div className='login'>
                <Card className='card' title="登录信息" extra={<a href="#">注册</a>} style={{ width: 400 }}>
                    <Form.Item label="用户名" >
                        {getFieldDecorator('userName', {
                            rules: [
                                { required: true, message: '用户名root' },
                                { min: 4, message: '请填写root' },
                                { max: 4, message: '请填写root' }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,1)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item label="密码：">
                        {getFieldDecorator('passWord', {
                            rules: [
                                { required: true, message: '密码123' },
                                { min: 3, message: '密码123' },
                                { max: 3, message: '密码123' }
                            ]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,1)' }} />}
                                type="password"
                                placeholder="Password"
                                onKeyDown={(e) => {
                                    if (e.keyCode == 13) {
                                        this.login()
                                    }
                                }}
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" onClick={() => {
                            // let { userName, passWord } = getFieldsValue()
                            this.login()
                        }}>
                            登录
                    </Button>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox style={{ marginLeft: 20 }}>记住密码</Checkbox>)}
                    </Form.Item>
                </Card>
            </div>
        )
    }
}
export default Form.create({})(Login)

