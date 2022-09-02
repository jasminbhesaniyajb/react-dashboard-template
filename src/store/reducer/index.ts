import { ADD_USER } from '../constant';

const initialState = [
  {
    name: 'abc',
    avatar: 'aa',
    email: 'a',
    mobile: 'aa',
    gender: 'm',
    age: 24
  }
];

export const userData = (initialState, action) => {
  if (action.type === ADD_USER) {
    console.log('reducer call', action);
    return action.payload;
  } else {
    console.log('no action match');
    return initialState;
    // return {
    //     ...initialState,
    // }
  }
};
