import Loadable from 'react-loadable'
import React from 'react'

// 过度组件-组件未加载出时现实的组件
const Loading = () => {
    return (
        <div>
            loading...
        </div>
    )
}
// 使用懒加载
export default (loader,loading = Loading)=>{
    return Loadable({
        loader,//传入的异步组件
        loading //过场组件
    });
}