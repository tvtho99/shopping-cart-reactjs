import { put, takeLeading, call, delay } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { cartActions } from './cartSlice';
import { setLoading, setRedirecting } from '../loading/loadingSlice';

type SubmitCartPayloadType = {
  paySuccess: boolean;
  productsInOrder: {
    productId: string;
    quantity: number;
  }[];
};

const submitCart = (payload: SubmitCartPayloadType) => {
  return axios.request({
    method: 'POST',
    url: 'http://localhost:4000/api/checkout',
    data: payload,
  });
};

function* handleSubmitCart(action: PayloadAction<SubmitCartPayloadType>) {
  try {
    yield put(setLoading(true));
    yield call(submitCart, action.payload);
    yield delay(1000);
    yield put(
      cartActions.clearCart({ cartItems: [], cartQuantity: 0, totalPrice: 0 })
    );
    toast.success('Thank your for purchased!!', {
      containerId: 'submitCartToast',
      icon: '👏',
    });
    yield put(setRedirecting(true));
    yield put(setLoading(false));
  } catch (err) {
    yield put(setLoading(false));
    const error = err as AxiosError;
    console.error(error.message);
  }
}

export default function* cartSaga() {
  yield takeLeading(cartActions.submitCart.type, handleSubmitCart);
}
