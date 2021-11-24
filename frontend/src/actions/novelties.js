import { FETCH_ALL_N, CREATE_N } from '../types/types';

import * as api from '../api/index.js';


export const getNovelties = () => async (dispatch) => {
    try {
      const { data } = await api.fetchNovelties();
  
      dispatch({ type: FETCH_ALL_N, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const createNovelty = (novelty) => async (dispatch) => {
    try {
      const { data } = await api.createNovelty(novelty);
  
      dispatch({ type: CREATE_N, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  