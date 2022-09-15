import { ADD_PRODUCT, PRODUCT_LIST, SET_PRODUCT_LIST } from '../constant';

export const addProduct = (data): any => {
  return {
    type: ADD_PRODUCT,
    payload: data
  };
};

export const getProducts = () => {
  return {
    type: PRODUCT_LIST,
  };
};
