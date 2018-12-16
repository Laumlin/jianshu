import axios from 'axios'
import * as constants from './constants'

const toLogin = (status) => ({
  type: constants.LOGIN,
  status
})
export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json')
      .then(res => {
        const data = res.data.loginStatus
        dispatch(toLogin(data))
      })
  }
}

export const logout = () => ({
  type: constants.LOGOUT
})