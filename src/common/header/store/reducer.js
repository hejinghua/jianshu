import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS ({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1, //当前列表页码
  totalPage: 1, //整体数据总页数
})
export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOUCS) {
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  }
  if (action.type === actionTypes.MOUSE_ENTER) {
    return state.set('mouseIn', true);
  }
  if (action.type === actionTypes.MOUSE_LEAVE) {
    return state.set('mouseIn', false);
  }
  if (action.type === actionTypes.CHANGE_PAGE) {
    return state.set('page', action.page);
  }
  return state;
}