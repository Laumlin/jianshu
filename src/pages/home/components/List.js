import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, SplitLine } from '../style'

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