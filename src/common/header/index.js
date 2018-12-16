import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actionCreators } from './store/'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
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

class Header extends PureComponent {
  getListArea() {
    const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let i = (page-1) * 10; i < page*10; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch 
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { login, focused, list, handleInputBlur, handleInputFocus, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/"><Logo></Logo></Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide">
              <NavSearch 
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60d;</i>
            {this.getListArea()}
          </SearchWrapper>
          { login ? <Link to='/'><NavItem className="right" onClick={logout}>退出</NavItem></Link> : <Link to='/login'><NavItem className="right">登录</NavItem></Link>}
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className='reg'>注册</Button>
          <Link to='/write'>
            <Button className='write'>
              <i className="iconfont">&#xe617;</i>
              写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    // 等价于 focused: state.get('header').get('focused')
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
    login: state.getIn(['login', 'login']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },

    handleChangePage(page, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinIcon.style.transform = 'rotate('+ (originAngle+360) +'deg)'

      if (page < totalPage) {
        dispatch(actionCreators.changePage(page+1))
      } else {
        dispatch(actionCreators.changePage(1))
      }
    },

    logout() {
      dispatch(loginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)