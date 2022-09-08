import { ADD_USER } from '../constant';

export const addUser = (data): any => {
  console.log('action call', data);
  return {
    type: ADD_USER,
    payload: data
  };
};
