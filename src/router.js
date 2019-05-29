import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// 页面
import Login from './pages/login'
import Home from './pages/home'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/home' component={Home}></Route>
      </BrowserRouter>
    )
  }
}
