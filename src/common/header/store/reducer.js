import * as constains from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})
// immutable对象的set方法，会结合之前immutable对象的值，
// 和设置的值，返回一个全新的对象，不是直接修改state
export default (state = defaultState, action) => {
  switch (action.type) {
    case constains.MOUSE_ENTER:
      return state.set('mouseIn', true)
    case constains.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constains.SEARCH_FOCUS:
      return state.set('focused', true)
    case constains.SEARCH_BLUR:
      return state.set('focused', false)
    case constains.INIT_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage)// state中list为immutable对象，所以action.data也需要修改为immutable对象
    default:
      return state
  }
}