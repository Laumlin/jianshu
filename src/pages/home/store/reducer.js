import { fromJS } from "immutable"
import * as contains from './contains'

const defaultState = fromJS({
  articleList: [],
  authorList: [],
  recommendList: [],
  page: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case contains.HOME_INIT_DATA:
      return state.merge({
        'articleList': fromJS(action.articleList),
        'authorList': fromJS(action.authorList),
        'recommendList': fromJS(action.recommendList)
      })
    case contains.MORE_ARTICLE_LIST: 
      return state.merge({
        'articleList': state.get('articleList').concat(fromJS(action.articleList)),
        'page': action.page
      })  
    default:
      return state
  }
}