/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_PRODUCT, PRODUCT_LIST } from '../constant';

export const productData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('ADD_PRODUCT', action);
      return [action.payload, ...initialState];
    case PRODUCT_LIST:
      console.log('PRODUCT_LIST', action);
      return [action.payload, ...initialState];
    default:
      return initialState;
  }
};
