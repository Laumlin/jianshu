import React, { Component } from 'react'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.bandleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <NavSearch 
              className={this.state.focused ? 'focused' : ''}
              onFocus={this.bandleInputFocus}
              onBlur={this.handleInputBlur}
            ></NavSearch>
            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</i>
          </SearchWrapper>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Button className='write'>
            <i className="iconfont">&#xe617;</i>
          写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState(() => ({focused: true}))
  }

  handleInputBlur() {
    this.setState(() => ({focused: false}))
  }
}

export default Header