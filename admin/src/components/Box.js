import React, { Component } from 'react'
import Approuter from '../router/AppRouter'
import style from './box.model.less'
class Box extends Component {
    render() {
        return (
            <div className={style.box}>
                < Approuter></ Approuter>
            </div>

        )
    }
}
export default Box