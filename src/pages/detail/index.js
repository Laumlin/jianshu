import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { DetailWrapper, Header, Content } from './style'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content>
          {content}
        </Content>
      </DetailWrapper>
    )
  }
  
  componentDidMount() {
    this.props.getDetailData()
  }
}

const mapState = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    getDetailData() {
      dispatch(actionCreators.getDetailData())
    }
  }
}
export default connect(mapState, mapDispatch)(Detail)