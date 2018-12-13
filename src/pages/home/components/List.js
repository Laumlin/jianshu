import React, { Component } from 'react'
import { actionCreators } from '../store'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ListItem, ListInfo, SplitLine, ListMeta, LoadMore } from '../style'

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props
    return (
      <div>
        <SplitLine></SplitLine>
        {
          list.map((item, index) => 
            <ListItem key={index}>
              <img className="list-pic" src={item.get('imgUrl')} alt=""/>            
              <ListInfo>
                <Link className="title-wrapper" to="/detail"><h3 className="title">{item.get('title')}</h3></Link>
                <p className="desc">{item.get('desc')}</p>
              </ListInfo>
              <ListMeta>
                <a className="author" href="/">{item.get('author')}</a>
                <a className="comments" href="/"><i className="iconfont">&#xe770;</i>{item.get('comments')}</a>
                <span className="likes"><i className="iconfont">&#xe65c;</i>{item.get('likes')}</span>
              </ListMeta>
            </ListItem>
          )
        }
        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'page'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}
export default connect(mapState, mapDispatch)(List)