import {combineReducers} from 'redux';
import posts from './postReducer';
import auth from './authReducer';
import novelties from './noveltyReducer';



export const reducers = combineReducers({
    posts, auth, novelties
});