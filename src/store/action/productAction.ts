import { ADD_PRODUCT, PRODUCT_LIST } from '../constant';
import Axios from 'axios';

export const addProducts = (data): any => {
  return {
    type: ADD_PRODUCT,
    payload: data
  };
};

export const getProducts = async () => {
  let data = await Axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log("data", data);  
  return {
    type: PRODUCT_LIST,
    payload: data
  };
};
