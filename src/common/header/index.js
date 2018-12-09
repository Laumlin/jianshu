import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'

class Header extends Component {
  getListArea(show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.props.focused}
              classNames="slide">
              <NavSearch 
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60d;</i>
            {this.getListArea(this.props.focused)}
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused'])
    // 等价于 focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)