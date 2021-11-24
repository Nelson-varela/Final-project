import {combineReducers} from 'redux';
import posts from './postReducer';
import auth from './authReducer';
import novelties from './noveltyReducer';
import sessions from './sessionsReducer';

export const reducers = combineReducers({
  posts, auth, novelties, sessions
});
