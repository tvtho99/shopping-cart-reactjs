import { all } from 'redux-saga/effects';

import cartSaga from '../features/cart/cartSaga';
import productsSaga from '../features/products/productsSaga';

export default function* rootSaga() {
  yield all([productsSaga(), cartSaga()]);
}
