import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

export function fetchQuestionsBatch() {
  return {
    type:      types.FETCH_QUESTIONS_BATCH,
    questions: [
      {
        id: v4(),
        creator_id: v4(),
        creator_name: 'Tomasz Rybczyński',
        title: 'Test title',
        body: 'test body',
        created_at: '3:56pm, April 3, 2012'
      },
      {
        id: v4(),
        creator_id: v4(),
        creator_name: 'Foo baz',
        title: 'Test title 2',
        body: 'test body 2',
        created_at: '3:56pm, April 3, 2012'
      }
    ]
  };
}

export function selectQuestion(questionId) {
  return {
    type:       types.SELECT_QUESTION,
    questionId: questionId
  };
}

export function createQuestion(questionBody) {
  const question = {
    id: v4(),
    creator_id: v4(),
    creator_name: 'Foo baz',
    title: questionBody.title,
    body: questionBody.body,
    created_at: '3:56pm, April 3, 2012'
  }

  return {
    type:     types.CREATE_QUESTION,
    question: question
  };
}
