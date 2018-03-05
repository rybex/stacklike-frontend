import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';
import {
  callSearch,
  callCreateQuestion,
  callCreateAnswer
} from '../services/apiService';

export function fetchQuestionsBatch() {
  return dispatch => {
    return callSearch().then(([response, json]) =>{
      dispatch(fetchQuestionsSuccess(json));
    })
  };
}

export function createQuestion(questionBody) {
  return (dispatch, getState) => {
    const user     = getState().users;
    const question = {
      id:            v4(),
      creator_name:  user.name,
      creator_image: user.image,
      title:         questionBody.title,
      body:          questionBody.body,
      created_at:    '3:56pm, April 3, 2012',
      answers:       []
    }

    return callCreateQuestion(question).then(([response, json]) =>{
      dispatch(createQuestionSuccess(question))
    })
  };
}

export function createAnswer(answerBody) {
  return (dispatch, getState) => {
    const user   = getState().users;
    const answer = {
      id:            v4(),
      question_id:   answerBody.questionId,
      creator_name:  user.name,
      creator_image: user.image,
      body:          answerBody.body,
      created_at:   '3:56pm, April 3, 2012'
    }

    return callCreateAnswer(answer).then(([response, json]) =>{
      dispatch(createAnswerSuccess(answer))
    })
  };
}

function fetchQuestionsSuccess(questions) {
  return {
    type: types.FETCH_QUESTIONS_BATCH,
    questions: questions
  };
}

function createQuestionSuccess(question) {
  return {
    type:     types.CREATE_QUESTION,
    question: question
  };
}

function createAnswerSuccess(answer) {
  return {
    type:   types.CREATE_ANSWER,
    answer: answer
  };
}
