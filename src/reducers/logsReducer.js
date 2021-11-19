import { FETCH_ALL_LOGS, CREATE_LOGGIN, CREATE_LOGOUT } from '../types/types';


export default (logs = [], action) => {
    switch (action.type) {
      case FETCH_ALL_LOGS:
        
        return action.payload;
      case CREATE_LOGGIN:
        
        return [...logs, action.payload], {active:true}

      case CREATE_LOGOUT:
        
        return [...logs, action.payload], {active:false};
      default:
        return logs;
    }
  };