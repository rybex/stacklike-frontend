import { combineReducers } from 'redux';
import users               from './users';
import questions           from './questions';
 
export default combineReducers({
  users,
  questions
})
