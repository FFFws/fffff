import React, { Component } from 'react'
import { BrowserRouter, Switch, NavLink, Redirect, Route } from 'react-router-dom'
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
                    <Redirect exact from='/' to='admin/home'></Redirect>
                    <Route exact path='/login' component={Login}></Route>
                    <Route exact path='/admin' component={Admin}></Route>
                    <Route path='/admin' render={() => {
                        return (
                            <Admin>
                                <Switch>
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