import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Detail from './pages/detail'
import Home from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIconfont />
          <Header />
          <BrowserRouter>
            <Fragment>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App
