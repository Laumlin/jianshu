import React, { Component } from 'react'
import { 
  HeaderWrapper,
  Logo
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
      </HeaderWrapper>
    )
  }
}

export default Header