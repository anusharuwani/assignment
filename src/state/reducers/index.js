import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import questionReducer from './questionsReducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  questions: questionReducer
})