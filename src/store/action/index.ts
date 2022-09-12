import { ADD_USER, DELETE_USER } from '../constant';

export const addUser = (data): any => {
  console.log('action call', data);
  return {
    type: ADD_USER,
    payload: data
  };
};

export const deleteUser = (data): any => {
  console.log('action delete user call', data);
  return {
    type: DELETE_USER,
    payload: data
  };
};
