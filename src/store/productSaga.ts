import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST, SEARCH_PRODUCT } from './constant';

function* getProducts() {
  const data = yield Axios.get('http://localhost:3100/product');
  yield put({ type: SET_PRODUCT_LIST, payload: data.data });
}

function* searchProducts(data) {
  const result = yield Axios.get(`http://localhost:3100/product?q=${data.query}`);
  yield put({ type: SET_PRODUCT_LIST, payload: result.data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga;
