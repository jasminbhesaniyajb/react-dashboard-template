/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_PRODUCT, PRODUCT_LIST, SET_PRODUCT_LIST } from '../constant';

export const productData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('ADD_PRODUCT', action);
      return [action.payload, ...initialState];
    case SET_PRODUCT_LIST:
      console.log('SET_PRODUCT_LIST', action);
      return action.payload;
    default:
      return initialState;
  }
};
