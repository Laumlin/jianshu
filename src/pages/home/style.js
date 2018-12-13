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
  width: 280px;
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
  .title-wrapper {
    text-decoration: none;
    color: #000;
  }
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
export const ListMeta = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: #b4b4b4;
  .iconfont {
    font-size: 12px;
  }
  .author, .comments {
    margin-right: 8px;
    text-decoration: none;
    color: #b4b4b4;
  }
`

export const RecommendWrapper = styled.div`
  margin-top: 26px;
  width: 280px;
`
export const RecommendItem = styled.a.attrs({
  href: '/'
})`
  display: block;
  margin-bottom: 6px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`
export const AuthorWrapper = styled.div`
  .more {
    margin-top: 20px;
    display: block;
    padding: 10px 7px 10px 12px;
    font-size: 13px;
    text-align: center;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-decoration: none;  
    .next {
      font-size: 12px;
    }
  }
`

export const AuthorTilte = styled.div`
  margin-top: 36px;
  color: #969696;
  font-size: 14px;
  .left: {
    float: left;
  }
  .right {
    float: right;
    text-decoration: none;
    .spin {
      margin-right: 2px;
      font-size: 13px;
    }
  }
`
export const Authors = styled.ul`
`
export const AuthorInfo = styled.li`
  margin-top: 15px;
  display: flex;
  height: 48px;
  .left {
    .left-avtor {
      margin-right: 10px;
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }
  }
  .middle {
    flex: 1;
    .author-name {
      display: block;
      padding: 8px 0;
      font-size: 14px;
      color: #333;
      text-decoration: none;
    }
    .author-desc {
      font-size: 12px;
      color: #969696;
    }
  }
  .right {
    flex: 0 0 40px;
    padding: 8px 0;
    font-size: 13px;
    color: #42c02e;
    cursor: pointer;
    .add {
      font-size: 12px;
    }
  }
`

export const LoadMore = styled.a`
  display: block;
  margin: 30px 0 60px 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  background: #a5a5a5;
  cursor: pointer;
`