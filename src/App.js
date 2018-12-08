import React, { Component, Fragment } from 'react'
import Header from './common/header'
import { GlobalStyle } from './style'
import { GlobalIconfont } from './statics/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIconfont />
        <Header />
      </Fragment>
    )
  }
}

export default App
