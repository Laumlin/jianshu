import * as constants from './constants'
import axios from 'axios'

const initDetaiData = (data) => ({
  type: constants.GET_DETAIL_DATA,
  title: data.title,
  content: data.content
})

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('/api/detail.json')
      .then(res => {
        const data = res.data.data
        dispatch(initDetaiData(data))
      })
  }
}