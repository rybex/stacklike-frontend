import * as types from '../constants/actionTypes';

const initialState = {
  questions:        [],
  selectedQuestion: null
};

const actionsMap = {
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return {
      questions:        action.questions,
      selectedQuestion: null
    };
  },
  [types.SELECT_QUESTION](state, action) {
    var selectedQuestion = state.questions.find((question) => (
      question.id === action.questionId
    ));

    return {
      questions:        state.questions,
      selectedQuestion: selectedQuestion
    };
  }
  ,
  [types.CREATE_QUESTION](state, action) {
    return {
      ...state,
      questions: [...state.questions, action.question]
    };
  }
};

export default function questionsDashboard(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
