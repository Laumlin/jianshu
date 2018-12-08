import styled from 'styled-components'
import logoImg from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  positon: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 100px;
  height: 58px;
  background: url(${logoImg});
  background-size: contain;
`

export const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -480px;
  width: 960px;
  height: 100%;
`

export const NavItem = styled.div`
  line-height: 58px;
  color: #333;
  padding: 0 15px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right; 
    color: #969696;
    font-size: 15px;
  }
  &.active {
    color: #ea6f5a;
  }

`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter {
    transition: all 0.2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all 0.2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    margin-top: 14px;
    line-height: 30px;
    width: 30px;
    border-radius: 19px;
    text-align: center;
    &.focused {
      background: #aaa;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  margin-top: 10px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  width: 160px;
  height: 38px;
  font-size: 14px;
  outline: none;
  border: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 40px;
  top: 0;
  height: 58px;
`

export const Button = styled.div`
  float: left;
  margin-top: 10px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;

  &.reg {
    color: #ea6f5a;
  }
  &.write {
    background: #ea6f5a;
    color: #fff;
  }
`
