import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import ToTop from './common/toTop'
import Detail from './pages/detail'
import Home from './pages/home'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIconfont />
          <BrowserRouter>
            <Fragment>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
        <ToTop></ToTop>
      </Provider>
    )
  }
}

export default App
