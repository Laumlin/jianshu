import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { 
  AuthorWrapper,
  AuthorTilte,
  Authors,
  AuthorInfo
} from '../style'

class Author extends PureComponent {
  getAuthorInfo() {
    const { list } = this.props
    return (
      list.map((item) => 
        <AuthorInfo key={item.get('id')}>
          <div className="left">
            <img className="left-avtor" src={item.get('imgUrl')} alt=""/>
          </div>
          <div className="middle">
            <a className="author-name" href="/">{item.get('name')}</a>
            <p className="author-desc">{item.get('desc')}</p>
          </div>
          <div className="right">
            <span><i className="iconfont add">&#xe614;</i>关注</span>
          </div>
        </AuthorInfo>
      )
    )
  }
  render() {
    return (
      <AuthorWrapper>
        <AuthorTilte>
          <span className="left">推荐作者</span>
          <a className="right" href="/"><i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批</a>
        </AuthorTilte>
        <Authors>
          {this.getAuthorInfo()}
        </Authors>
        <a className="more" href="/">查看更多<i className="iconfont next">&#xe634;</i></a>
      </AuthorWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'authorList'])
  }
}

export default connect(mapState, null)(Author)