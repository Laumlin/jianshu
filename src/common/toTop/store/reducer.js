import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  scrollToTop: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SHOW_TO_TOP:
      return state.set('scrollToTop', true)
    case constants.HIDDEN_TO_TOP:
      return state.set('scrollToTop', false)
    default:
      return state
  }
}