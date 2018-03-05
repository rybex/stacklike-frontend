import * as types from '../constants/actionTypes';

const actionsMap = {
  [types.FETCH_USER](state, action) {
    return action.user;
  }
};

export default function users(state = null, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
