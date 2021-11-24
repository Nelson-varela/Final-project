import { FETCH_ALL_SESSIONS, FETCH_SESSIONS_BY_USER } from '../types/types';

import * as api from '../api/index';

export const getSessions = () => async (dispatch) => {
  try {
    const { data } = await api.getSessions();
    dispatch({ type: FETCH_ALL_SESSIONS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getSessionsByUser = (userId) => async (dispatch) => {
  try {
    const { data } = await api.getSessionsByUser(userId);
    dispatch({ type: FETCH_SESSIONS_BY_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
