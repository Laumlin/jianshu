import React, { Component } from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style'

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4581/14d959ff757f21616baa933fd3bdbfcf52fd512a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}