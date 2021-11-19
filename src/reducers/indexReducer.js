import {combineReducers} from 'redux';
import posts from './postReducer';
import auth from './authReducer';
import novelties from './noveltyReducer';
import logs from './logsReducer';


export const reducers = combineReducers({
    posts, auth, novelties, logs
});