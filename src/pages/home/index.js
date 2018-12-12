import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import List from './components/List'
import Recommend from './components/Recommend'
import Author from './components/Author'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  Carousel,
} from './style'

class Home extends PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <Carousel>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          </Carousel>        
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Author></Author>
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getInitData()
  }
}

const mapDispatch = (dispatch) => {
  return {
    getInitData() {
      dispatch(actionCreators.getHomeInitData())
    }
  }
}
export default connect(null, mapDispatch)(Home)