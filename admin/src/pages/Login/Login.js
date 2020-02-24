import React, { Component } from 'react'


class Login extends Component {
    setLocal() {
        let info = JSON.stringify({ err: 0, msg: 'ok', token: '12313', rootIds: ['1', '0', '2-0', '2-0', '2-3'] })
        localStorage.setItem('info', info)
    }

    render() {
        return (
            <div>
                <button onClick={this.setLocal.bind(this)}>登录</button>
            </div>
        )
    }
}
export default Login