import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

const initialState = {
  list:       [],
  cursor:     0,
  searchText: null,
  isLoading:  false
}

const actionsMap = {
  [types.FETCH_QUESTIONS](state, action) {
    return {
      list:       action.questions,
      cursor:     action.cursor,
      searchText: action.searchText,
      isLoading:  false
    };
  },
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return {
      list:       state.list.concat(action.questions),
      cursor:     action.cursor || state.cursor,
      searchText: action.searchText,
      isLoading:  false
    };
  },
  [types.APPLY_SEARCH](state, action) {
    return {
      list:       action.questions,
      cursor:     action.cursor,
      searchText: action.searchText,
      isLoading:  false
    };
  },
  [types.REQUESTED_QUESTIONS](state, action) {
    return {
      ...state,
      isLoading: true
    };
  },
  [types.CREATE_QUESTION](state, action) {
    return {
      list:       state.list.concat(action.question),
      cursor:     state.cursor + 1,
      searchText: state.searchText
    };
  },
  [types.CREATE_ANSWER](state, action) {
    const updatedQuestions = state.list.map((question) => {
      if(question.id === action.answer.question_id){
        const answers = question.answers.concat(action.answer)
        return { ...question, answers: answers }
      }
      return question;
    });

    return {
      list:       updatedQuestions,
      cursor:     state.cursor,
      searchText: state.searchText
    };
  }
};

export default function questions(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
