import { FETCH_ALL_LOGS, CREATE_LOGGIN, CREATE_LOGOUT } from '../types/types';

import * as api from '../api/index.js';


export const getSessions = () => async (dispatch) => {
    try {
      const { data } = await api.getSessions();
  
      dispatch({ type: FETCH_ALL_LOGS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const logginSession = (session) => async (dispatch) => {
    try {
      const { data } = await api.logginSession(session);
  
      dispatch({ type: CREATE_LOGGIN, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const logoutSession = (session) => async (dispatch) => {
    try {
      const { data } = await api.logoutSession(session);
  
      dispatch({ type: CREATE_LOGOUT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };