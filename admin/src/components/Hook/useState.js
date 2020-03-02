import React, { useState, useEffect } from 'react'

export default function Usestate() {
    let [num, addnum] = useState(0)
    let [name, changename] = useState('我我')
    useEffect(() => {
        let timer = setInterval(() => { console.log('组件挂载/更新了') }, 1000)
        return () => {
            console.log('组件销毁时')
            clearTimeout(timer)
        }
    }, [num])
    return (
        <div>
            <h1>{num}</h1>
            <button onClick={() => { addnum(num + 1) }}>add</button>
            <h1>{name}</h1>
            <button onClick={() => { changename('haha') }}>add</button>
        </div>
    )
}
