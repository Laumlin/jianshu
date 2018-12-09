import * as constanins from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

const initList = (data) => ({
  type: constanins.INIT_LIST,
  data: fromJS(data),// axios请求到的list需要转为immutable对象q
  totalPage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
  type: constanins.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constanins.SEARCH_BLUR
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/list.json')
      .then((res) => {
        const data = res.data.list 
        dispatch(initList(data))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}