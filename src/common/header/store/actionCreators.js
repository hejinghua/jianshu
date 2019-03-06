import axios from "axios";
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 9),
})

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOUCS
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
export const mouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
})
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      const action = changeList(data.data);
      dispatch(action);
    }).catch(()=> {
      console.log('error');
    })
  }
}