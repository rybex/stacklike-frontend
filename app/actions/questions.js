import * as types from '../constants/actionTypes';
import moment     from 'moment';
import { v4 }     from 'uuid';
import {
  callSearch,
  callFetchBatch,
  callCreateQuestion,
  callFetchQuestions,
  callCreateAnswer
} from '../services/apiService';

export function fetchQuestions() {
  return (dispatch, getState) => {
    dispatch(requestQuestions());
    return callFetchQuestions().then(([response, json]) =>{
      const cursor = calculateCursor(json);
      dispatch(fetchQuestionsSuccess(types.FETCH_QUESTIONS, json, null, cursor));
    })
  };
}

export function fetchQuestionsBatch(cursor, searchText = null) {
  return (dispatch, getState) => {
    return callFetchBatch(cursor, searchText).then(([response, json]) =>{
      const cursor = calculateCursor(json);
      dispatch(fetchQuestionsSuccess(types.FETCH_QUESTIONS_BATCH, json, searchText, cursor));
    })
  };
}

export function applySearch(searchText) {
  return dispatch => {
    dispatch(requestQuestions());
    return callSearch(searchText).then(([response, json]) =>{
      const cursor = calculateCursor(json);
      dispatch(fetchQuestionsSuccess(types.APPLY_SEARCH, json, searchText, cursor));
    })
  };
}

export function createQuestion(questionBody) {
  return (dispatch, getState) => {
    const user      = getState().users;
    const question  = {
      id:            v4(),
      creator_name:  user.name,
      creator_image: user.image,
      title:         questionBody.title,
      body:          questionBody.body,
      created_at:    moment().format("YYYY-MM-DD"),
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
      created_at:    moment().format("YYYY-MM-DD")
    }

    return callCreateAnswer(answer).then(([response, json]) =>{
      dispatch(createAnswerSuccess(answer))
    })
  };
}

function requestQuestions() {
  return {
    type: types.REQUESTED_QUESTIONS
  };
}

function fetchQuestionsSuccess(type, questions, searchText, cursor) {
  return {
    type:       type,
    questions:  questions,
    searchText: searchText,
    cursor:     cursor
  };
}

function createQuestionSuccess(question, cursor) {
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

function calculateCursor(questions) {
  const question  = questions.slice(-1)[0];
  return question ? question.cursor : null;
}
