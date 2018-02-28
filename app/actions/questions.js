import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

export function fetchQuestionsBatch() {
  return {
    type: types.FETCH_QUESTIONS_BATCH
  };
}

export function createQuestion(questionBody) {
  const question = {
    id: v4(),
    creator_id: v4(),
    creator_name: 'Foo baz',
    title: questionBody.title,
    body: questionBody.body,
    created_at: '3:56pm, April 3, 2012',
    answers: []
  }

  return {
    type:     types.CREATE_QUESTION,
    question: question
  };
}

export function createAnswer(answerBody) {
  const answer = {
    id: v4(),
    question_id: answerBody.questionId,
    creator_id: v4(),
    creator_name: 'Foo baz',
    body: answerBody.body,
    created_at: '3:56pm, April 3, 2012'
  }

  return {
    type:   types.CREATE_ANSWER,
    answer: answer
  };
}
