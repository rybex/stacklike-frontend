import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';

function callSessionMe() {
  const URL = "http://localhost:3000/me";
  return fetch(URL, {
    method: 'GET',
    headers: {
               'Accept': 'application/json',
               'Content-Type': 'application/json',
           },
    credentials: "include"
  })
  .then( response => Promise.all([response, response.json()]));
}

export function fetchUser(questionBody) {
  return dispatch => {
    return callSessionMe().then(([response, json]) =>{
      dispatch(fetchUserSuccess(json))
    })
  };
}

function fetchUserSuccess(payload) {
  return {
    type: types.FETCH_USER,
    user: payload
  }
}
