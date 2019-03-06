import axios from 'axios';
import {fromJS} from 'immutable'
import * as actionTypes from "./actionTypes";

const changHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList
})
const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})
const recommendList = (result) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  result: fromJS(result),
  writerTotalPage: Math.ceil(result.length / 5),
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      const action = changHomeData(result);
      dispatch(action);
    }).catch(() => {
      console.log('error');
    })
  }
}
export const getRecommendInfo = () => {
  return (dispatch) => {
    axios.get('/api/recommend.json').then((res)=>{
      const result = res.data.user;
      const action = recommendList(result);
      dispatch(action);
    }).catch(()=>{
      console.log('error');
    })
  }
}
export const changePage = (page) => ({
  type: actionTypes.WRITER_CHANGE_PAGE,
  page
})
export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data.list;
      const action = addHomeList(result, page + 1);
      dispatch(action);
    }).catch(() => {
      console.log('error');
    })
  }
}
export const toggleTopShow = (show) => ({
  type: actionTypes.TOGGLE_TOP_SHOW,
  show
})