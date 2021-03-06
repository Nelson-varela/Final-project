import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, COMMENT } from '../types/types';


export default (posts = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
      case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case CREATE:
        return [...posts, action.payload];
      case COMMENT:
        return posts.map((post) => {
            if (post._id === action.payload._id) {
             return action.payload;
           }
           return post;
         });
       
      case UPDATE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      case DELETE:
        return posts.filter((post) => post._id !== action.payload);
      default:
        return posts;
    }
  };