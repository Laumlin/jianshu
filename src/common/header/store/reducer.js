import * as constains from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constains.SEARCH_FOCUS) {
    // immutable对象的set方法，会结合之前immutable对象的值，
    // 和设置的值，返回一个全新的对象，不是直接修改state
    return state.set('focused', true)
  }
  if (action.type === constains.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}