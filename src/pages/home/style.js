import styled from 'styled-components'

export const HomeWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  padding-top: 30px;
  padding-left: 15px;
  width: 625px;
  .banner-img {
    margin-bottom: 35px;
    display: block;
    width: 625px;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  float: right;
  width: 240px;
`
export const Carousel = styled.div`
  border-bottom: 1px solid rgb(240, 240, 240);
`
export const SplitLine = styled.div`
  margin-bottom: 15px;
`

export const ListItem = styled.div`
  padding: 15px 2px 20px 0;
  margin-bottom: 15px;
  overflow: hidden;
  border-bottom: 1px solid rgb(240, 240, 240);
  .list-pic {
    float: right;
    width: 150px;
    heigth: 100px;
    border-radius: 4px;
  }
`
export const ListInfo = styled.div`
  .title {
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    margin: -7px 0px 4px;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: rgb(153, 153, 153);
    margin: 0px 0px 8px;
  }
`