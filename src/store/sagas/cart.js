import { all, put, takeLatest, call } from 'redux-saga/effects';
import { SIGNOUT_SUCCESS } from '../actions/actionTypes';

import { clearCart } from '../actions/cart';

function* clearCartSignOut() {
    yield put(clearCart())
}

function* onSignOutSuccess() {
    yield takeLatest(SIGNOUT_SUCCESS, clearCartSignOut);
}

export function* cartSagas() {
    yield all([call(onSignOutSuccess)]);
}