import * as actionType from '../types/types';

export const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, logged: true, loading: false, errors: null };

    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, logged: false, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;