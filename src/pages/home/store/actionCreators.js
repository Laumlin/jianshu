import axios from 'axios'
import * as contains from './contains'

const homeInitData = (data) => ({
  type: contains.HOME_INIT_DATA,
  articleList: data.articleList,
  authorList: data.authorList,
  recommendList: data.recommendList
})

export const getHomeInitData = () => {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then(res => {
        const data = res.data
        dispatch(homeInitData(data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}