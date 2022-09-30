import axios, { AxiosError } from 'axios';
import { call, delay, put, takeLeading } from 'redux-saga/effects';

import { setLoading } from '../loading/loadingSlice';
import { setProducts, fetchProducts } from './productsSlice';

const fetchProductsAxios = () => {
  return axios.request({
    method: 'GET',
    url: 'http://localhost:4000/api/products',
  });
};

function* handleFetchProducts() {
  try {
    yield put(setLoading(true));
    const { data } = yield call(fetchProductsAxios);
    yield put(setProducts(data));
    yield delay(500);
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    const error = err as AxiosError;
    console.error(error.message);
  }
}

export default function* productsSaga() {
  yield takeLeading(fetchProducts.type, handleFetchProducts);
}
