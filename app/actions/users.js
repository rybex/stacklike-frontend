import * as types from '../constants/actionTypes';
import { v4 }     from 'uuid';
import {
  callSessionMe
} from '../services/apiService';

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
