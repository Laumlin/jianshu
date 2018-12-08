import * as constains from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {
  if (action.type === constains.SEARCH_FOCUS) {
    return state.set('focused', true)
  }
  if (action.type === constains.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}