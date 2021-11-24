import { AUTH, LOGOUT } from '../types/types';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });
    router.push('/login');
  } catch (error) {
    console.log(error);
  }
};

export const signout = (router) => async (dispatch) => {
  try {
    await api.signOut();
    router.push('/login');
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGOUT });
  }
};