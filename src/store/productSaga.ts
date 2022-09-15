import Axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProducts() {
  const data = yield Axios.get('http://localhost:3100/product');
  yield put({ type: SET_PRODUCT_LIST, payload: data.data });
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
