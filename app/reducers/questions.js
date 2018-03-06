import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

const initialState = {
  list:       [],
  cursor:     0,
  searchText: null
}

const actionsMap = {
  [types.FETCH_QUESTIONS](state, action) {
    return {
      list:       action.questions,
      cursor:     action.cursor,
      searchText: action.searchText
    };
  },
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return {
      list:       state.list.concat(action.questions),
      cursor:     action.cursor || state.cursor,
      searchText: action.searchText
    };
  },
  [types.APPLY_SEARCH](state, action) {
    return {
      list:       action.questions,
      cursor:     action.cursor,
      searchText: action.searchText
    };
  },
  [types.CREATE_QUESTION](state, action) {
    return {
      list:       state.list.concat(action.question),
      cursor:     state.cursor,
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
