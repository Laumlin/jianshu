import axios from 'axios'
import * as contains from './contains'

const homeInitData = (data) => ({
  type: contains.HOME_INIT_DATA,
  articleList: data.articleList,
  authorList: data.authorList,
  recommendList: data.recommendList
})

const addArticleList = (data) => ({
  type: contains.MORE_ARTICLE_LIST,
  articleList: data.articleList
})

export const getHomeInitData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        const data = res.data
        dispatch(homeInitData(data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/articleList.json')
      .then(res => {
        const data = res.data
        dispatch(addArticleList(data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}