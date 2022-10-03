import { ADD_PRODUCT, PRODUCT_LIST, REMOVE_PRODUCT, SET_PRODUCT_LIST, SEARCH_PRODUCT } from '../constant';

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

export const removeProduct = (data): any => {
  return {
    type: REMOVE_PRODUCT,
    payload: data
  };
};

export const searchProduct = (query) => {
  return {
    type: SEARCH_PRODUCT,
    query
  };
}
