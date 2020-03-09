import React, { Component } from 'react'

class Home extends Component {
    constructor(){
        super()
        this.state={
            name:'手机',
            parse:'999',
            img:'',
            info:'黑色大号的'
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default Home

// /**
//  * 添加组件
//  * 商品详情页点击添加按钮，携带数据，跳转到修改/添加页面
//  * 组件挂宅时，设置数据，进行渲染数据
//  * 受控组件，点击修改数据
//  * 图片上传
//  * 点击上传-调取添加接口，添加成功，反馈成功提示，跳转到详情页
//  * / 






