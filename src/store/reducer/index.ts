/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_USER, DELETE_USER } from '../constant';

export const userData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_USER:
      console.log('add user', action);
      return [action.payload, ...initialState];
    case DELETE_USER:
      console.log('DELETE_USER', action);
     return initialState.splice(action.payload, 1, ...initialState)
    default:
      // no case match
      return initialState;
  }
};
