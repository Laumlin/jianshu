import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { LoginWrapper, LoginBox, LoginInput, LoginButton } from './style'

class Login extends PureComponent {
  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <div className="title-wrapper"><span className="title">登录</span></div>
          <LoginInput placeholder="手机号或邮箱"></LoginInput>
          <LoginInput placeholder="密码"></LoginInput>
          <LoginButton>登录</LoginButton>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

export default connect(null, null)(Login)