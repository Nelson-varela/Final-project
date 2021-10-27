import { FETCH_ALL, CREATE } from '../types/types';

import * as api from '../api/index.js';


export const getNovelties = () => async (dispatch) => {
    try {
      const { data } = await api.fetchNovelties();
  
      dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const createNovelty = (novelty) => async (dispatch) => {
    try {
      const { data } = await api.createNovelty(novelty);
  
      dispatch({ type: CREATE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  