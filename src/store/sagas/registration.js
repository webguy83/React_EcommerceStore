import { all, call, takeLatest, put } from 'redux-saga/effects';
import { REGISTRATION_START, REGISTRATION_SUCCESS } from '../actions/actionTypes';
import { registrationFailure, registrationSuccess } from '../actions/registration';
import { auth, createUserDoc } from '../../helpers/firebase';
import { signInPasswordStart } from '../actions/user';

function* onRegistration({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserDoc(user, { displayName });
        yield put(registrationSuccess({ email, password }))
    } catch (err) {
        yield put(registrationFailure(err));
    }
}

function* afterRegistrationSuccess({ payload: { email, password } }) {
    yield put(signInPasswordStart({email, password}));
}

function* onRegistrationStart() {
    yield takeLatest(REGISTRATION_START, onRegistration)
}

function* onRegistrationSuccess() {
    yield takeLatest(REGISTRATION_SUCCESS, afterRegistrationSuccess)
}

export function* registrationSagas() {
    yield all([call(onRegistrationStart), call(onRegistrationSuccess)]);
}