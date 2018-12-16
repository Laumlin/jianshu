import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    const { login } = this.props
    return (
      login ? <div>write页面</div> : <Redirect to='/login'/>
    )
  }
}

const mapState = (state) => {
  return {
    login: state.getIn(['login', 'login'])
  }
}
export default connect(mapState, null)(Write)