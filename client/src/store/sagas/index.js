import { call, all } from 'redux-saga/effects';
import { userSagas } from './user';
import { shopSagas } from './shop';
import { cartSagas } from './cart';
import { registrationSagas } from './registration';

export function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas), call(registrationSagas)]);
}