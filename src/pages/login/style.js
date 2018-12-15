import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: absolute;
  top: 58px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f1f1f1;
  z-index: 0;
  .title-wrapper {
    margin: 20px 0;
    text-align: center;
    .title {
      padding: 10px;
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
  }
`

export const LoginBox = styled.div`
  width: 300px;
  margin: 50px auto;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const LoginInput = styled.input`
  width: 250px;
  height: 40px;
  margin: 10px auto;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
`

export const LoginButton = styled.div`
  margin: 10px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 25px;
  text-align: center;
  color: #fff;
  background-color: #3194d0;
  cursor: pointer;
`