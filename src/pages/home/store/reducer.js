import { fromJS } from "immutable"
import * as contains from './contains'

const defaultState = fromJS({
  articleList: [],
  authorList: [],
  recommendList: [],
  page: 1
})

const getHomeData = (state, action) => {
  return state.merge({
    'articleList': fromJS(action.articleList),
    'authorList': fromJS(action.authorList),
    'recommendList': fromJS(action.recommendList)
  })
}
const getMoreArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(fromJS(action.articleList)),
    'page': action.page
  })  
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case contains.HOME_INIT_DATA:
      return getHomeData(state, action)
    case contains.MORE_ARTICLE_LIST: 
      return getMoreArticleList(state, action)
    default:
      return state
  }
}