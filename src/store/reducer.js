import { combineReducers } from 'redux'
import { reducer as HeaderReducer } from '../common/header/store/'

export default combineReducers({
  header: HeaderReducer
})