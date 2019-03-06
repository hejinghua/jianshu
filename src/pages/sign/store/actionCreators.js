import axios from 'axios'
import * as actionTypes from "./actionTypes";

const signCheck = () => ({
  type: actionTypes.SIGN_CHECK,
  value: true
})
export const signout = () => ({
  type: actionTypes.CHANGE_SIGNOUT,
  value: false
})
export const signUp = (account, iphone, password) => {
  return (dispatch) => {
    axios.get('/api/sign.json?account=' + account + '&iphone=' + iphone + '&password=' + password).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(signCheck())
      } else {
        alert('注册失败')
      }
    }).catch(() => {
      console.log('error');
    })
  }
}
