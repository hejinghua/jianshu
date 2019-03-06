import { fromJS } from 'immutable';
import * as actionTypes from "./actionTypes";

const defaultState = fromJS ({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false,
  writerPage: 1,
  writerTotalPage:1
})
const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList)
  });
}
export default (state = defaultState, action) => {
  if (action.type === actionTypes.CHANGE_HOME_DATA) {
    return changeHomeData(state, action)
  }
  if (action.type === actionTypes.ADD_HOME_LIST) {
    return state.merge({
      articleList: state.get('articleList').concat(action.list),
      articlePage: action.nextPage
    })
  }
  if (action.type === actionTypes.TOGGLE_TOP_SHOW) {
    return state.set('showScroll', action.show)
  }
  if (action.type === actionTypes.CHANGE_RECOMMEND_LIST) {
    return state.merge({
      recommendList: action.result,
      writerTotalPage: action.writerTotalPage
    })
  }
  if (action.type === actionTypes.WRITER_CHANGE_PAGE) {
    return state.set('writerPage', action.page)
  }
  return state;
}