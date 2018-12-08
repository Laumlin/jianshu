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
  }
  &.active {
    color: #ea6f5a;
  }

`
