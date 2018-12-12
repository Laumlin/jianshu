import styled from 'styled-components'

export const BackToTop = styled.div`
  position: fixed;
  right: 40px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  .to-top {
    display: inline-block;
    vertical-align: middle;
    line-height: 50px;
    transform: rotate(270deg);
    transform-origin: center center;
  }
`