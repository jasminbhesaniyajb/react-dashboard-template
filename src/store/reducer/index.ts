/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_USER, DELETE_USER } from '../constant';

// const initialState = [
//   {
//     name: 'abc',
//     avatar: 'aa',
//     email: 'a',
//     mobile: 'aa',
//     gender: 'm',
//     age: 24
//   }
// ];

export const userData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_USER:
      // add user logic
      console.log('add user', action);
      return [action.payload, ...initialState];
    case DELETE_USER:
      // add user logic
      console.log('delete user', action);
      return 1 - 1;
    default:
      // no case match
      return initialState;
  }
};
