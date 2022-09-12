import { PRODUCT_LIST } from '../constant';

export const getProducts = (): any => {
    let data = 'hello product list'
    console.log('action call', data);
    return {
      type: PRODUCT_LIST,
      payload: data
    };
  };