import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, SplitLine, ListMeta } from '../style'

class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        <SplitLine></SplitLine>
        {
          list.map((item) => 
            <ListItem key={item.get('id')}>
              <img className="list-pic" src={item.get('imgUrl')} alt=""/>            
              <ListInfo>
                <h3 className="title">{item.get('title')}</h3>
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
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'ArticleList'])
  }
}
export default connect(mapState)(List)