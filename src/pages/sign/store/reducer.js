import { fromJS } from 'immutable';
import * as actionTypes from "./actionTypes";

const defaultState = fromJS ({
  sign: false,
})

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SIGN_CHECK) {
    return state.set('sign',action.value)
  }
  if (action.type === actionTypes.CHANGE_SIGNOUT) {
    return state.set('sign', action.value)
  }
  return state;
}