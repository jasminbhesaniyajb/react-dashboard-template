/* eslint-disable @typescript-eslint/default-param-last */
import { ADD_PRODUCT, PRODUCT_LIST, REMOVE_PRODUCT, SET_PRODUCT_LIST } from '../constant';

export const productData = (initialState = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('ADD_PRODUCT', action);
      return [action.payload, ...initialState];
    case SET_PRODUCT_LIST:
      console.log('SET_PRODUCT_LIST', action);
      return action.payload;
    case REMOVE_PRODUCT:
      console.log('REMOVE_PRODUCT', action);
      const data = initialState.filter((item) => item.id !== action.payload)
      return [...data]
    default:
      return initialState;
  }
};
