import { FETCH_ALL, CREATE } from '../types/types';


export default (novelties = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...novelties, action.payload];
      default:
        return novelties;
    }
  };