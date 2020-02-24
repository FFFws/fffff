import React, { Component } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Person from '../pages/Person/Person'
import Setting from '../pages/Setting/Setting'
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
                                    <Route path='/admin/person' component={Person}></Route>
                                </Switch>
                            </Admin>
                        )
                    }}></Route>
                </Switch>

            </BrowserRouter>
        )
    }
}
export default Approuter