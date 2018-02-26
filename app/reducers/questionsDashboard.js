import * as types from '../constants/actionTypes';

const initialState = {
  questions:        [],
  selectedQuestion: null
};

const actionsMap = {
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return {
      questions:        action.questions,
      selectedQuestion: action.questions[0]
    };
  }
};

export default function questionsDashboard(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
