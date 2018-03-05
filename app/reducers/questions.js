import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

const actionsMap = {
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return action.questions;
  },
  [types.CREATE_QUESTION](state, action) {
    return [...state, action.question];
  },
  [types.CREATE_ANSWER](state, action) {
    const updatedQuestions = state.map((question) => {
      if(question.id === action.answer.question_id){
        const answers = question.answers.concat(action.answer)
        return { ...question, answers: answers }
      }
      return question;
    });

    return updatedQuestions;
  }
};

export default function questions(state = [], action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
