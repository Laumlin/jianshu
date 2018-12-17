import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import { DetailWrapper, Header, Content } from './style'

class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>
          <h1>{title}</h1>
        </Header>
        <Content dangerouslySetInnerHTML={{__html: content}}>
        </Content>
      </DetailWrapper>
    )
  }
  
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDetailData(id)
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
    getDetailData(id) {
      dispatch(actionCreators.getDetailData(id))
    }
  }
}
export default connect(mapState, mapDispatch)(withRouter(Detail))