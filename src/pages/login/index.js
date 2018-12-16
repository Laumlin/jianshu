import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <div className="title-wrapper"><span className="title">登录</span></div>
          <LoginInput placeholder="手机号或邮箱" ref={(account) => {this.account=account}}></LoginInput>
          <LoginInput placeholder="密码" ref={(passward) => {this.passward = passward}}></LoginInput>
          <LoginButton onClick={() => this.props.login(this.account.value, this.passward.value)}>登录</LoginButton>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    
  }
}

const mapDispatch = (dispatch) => {
  return {
    login(account, passward) {
      dispatch(actionCreators.login(account, passward))
    }
  } 
}
export default connect(mapState, mapDispatch)(Login)