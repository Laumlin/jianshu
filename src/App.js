import React, { Component, Fragment } from 'react'
import { GlobalStyle } from './style'
import { GlobalIconfont } from './statics/iconfont/iconfont'
import { Provider } from 'react-redux'
import store from './store'
import Header from './common/header'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <GlobalStyle />
          <GlobalIconfont />
          <Header />
        </Fragment>
      </Provider>
    )
  }
}

export default App
