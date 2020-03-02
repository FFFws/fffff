import React, { Component } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import Echarts from '../pages/Echarts/Echarts'
import Setting from '../pages/Setting/Setting'
import Foodslist from '../pages/Foodslist/Foodslist'
import AddList from '../pages/AddList/AddList'


class Approuter extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <NavLink to='/login'>登录</NavLink> */}

                <Switch>
                    <Redirect exact from='/' to='/login'></Redirect>
                    <Route exact path='/login' component={Login}></Route>
                    <Route path='/admin' render={() => {
                        return (
                            <Admin>
                                <Switch>
                                    <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/setting' component={Setting}></Route>
                                    <Route path='/admin/echart' component={Echarts}></Route>
                                    <Route path='/admin/goods/list' component={Foodslist}></Route>
                                    <Route path='/admin/goods/add' component={AddList}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                </Switch>
                e
            </BrowserRouter>
        )
    }
}
export default Approuter