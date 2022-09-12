/* eslint-disable @typescript-eslint/default-param-last */
import { PRODUCT_LIST } from '../constant';

export const productData = (initialState = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log('PRODUCT_LIST', action);
      return [action.payload];
    default:
      return initialState;
  }
};
