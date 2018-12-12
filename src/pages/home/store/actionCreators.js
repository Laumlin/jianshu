import axios from 'axios'
import * as contains from './contains'

const homeInitData = (data) => ({
  type: contains.HOME_INIT_DATA,
  articleList: data.articleList,
  authorList: data.authorList,
  recommendList: data.recommendList
})

const addArticleList = (data, page) => ({
  type: contains.MORE_ARTICLE_LIST,
  articleList: data.articleList,
  page
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

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/articleList.json?page=' + page)
      .then(res => {
        const data = res.data
        dispatch(addArticleList(data, page+1))
      })
      .catch(err => {
        console.log(err)
      })
  }
}