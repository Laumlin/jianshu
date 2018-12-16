import * as constants from './constants'
import axios from 'axios'

const initDetaiData = (data) => ({
  type: constants.GET_DETAIL_DATA,
  title: data.title,
  content: data.content
})

export const getDetailData = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id='+id)
      .then(res => {
        const data = res.data.data
        dispatch(initDetaiData(data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}