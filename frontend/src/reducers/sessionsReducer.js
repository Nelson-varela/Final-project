import { FETCH_ALL_SESSIONS, FETCH_SESSIONS_BY_USER } from '../types/types';

const sessionsReducer = (logs = [], action) => {
  switch (action.type) {
    case FETCH_ALL_SESSIONS:
      return [...action.payload];
    case FETCH_SESSIONS_BY_USER:
      return [...action.payload];
    default:
      return logs;
  }
};

  export default sessionsReducer;
