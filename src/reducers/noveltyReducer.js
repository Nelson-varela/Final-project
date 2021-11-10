import { FETCH_ALL_N, CREATE_N } from '../types/types';


export default (novelties = [], action) => {
    switch (action.type) {
      case FETCH_ALL_N:
        return action.payload;
      case CREATE_N:
        return [...novelties, action.payload];
      default:
        return novelties;
    }
  };