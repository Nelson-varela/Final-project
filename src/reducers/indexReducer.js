import {combineReducers} from 'redux';
import { postsReducer } from './postReducer';


export const reducers = combineReducers({
    postReducer: postsReducer

});