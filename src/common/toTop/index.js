import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BackToTop } from './style'
import { actionCreators } from './store'

class ToTop extends Component {
  render() {
    const { scrollToTop, backToTop } = this.props
    return scrollToTop ? <BackToTop onClick={backToTop}><i className="iconfont to-top">&#xe634;</i></BackToTop> : null
  }

  componentDidMount() {
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollToTop, false)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollToTop, false)
  }
}

const mapState = (state) => {
  return {
    'scrollToTop': state.getIn(['toTop', 'scrollToTop'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    changeScrollToTop() {
      if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreators.showToTop())
      } else {
        dispatch(actionCreators.hiddenToTop())
      }
    },

    backToTop() {
      window.scrollTo(0, 0)
    }
  }
}
export default connect(mapState, mapDispatch)(ToTop)