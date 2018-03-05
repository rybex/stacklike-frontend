import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

const initialState = [
  {
    id: v4(),
    creator_id: v4(),
    creator_name: 'Tomasz Rybczyński',
    title: 'Test title',
    body: 'test body',
    created_at: '3:56pm, April 3, 2012',
    answers: []
  },
  {
    id: v4(),
    creator_id: v4(),
    creator_name: 'Foo baz',
    title: 'Test title 2',
    body: 'test body 2',
    created_at: '3:56pm, April 3, 2012',
    answers: []
  }
];

const actionsMap = {
  [types.FETCH_QUESTIONS_BATCH](state, action) {
    return state;
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

export default function questions(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}
