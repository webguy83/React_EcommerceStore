import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';
import { COLLECTIONS_LOADING, GOOGLE_SIGNIN_START, SIGNINPASSWORD_START, CHECK_USER_SESSION } from '../actions/actionTypes';
import { googleSignInSuccess, googleSignInFailure, signInPasswordSuccess, signInPasswordFailure } from '../actions/user';

import { collectionsLoadedSuccess, collectionsLoadedFailed } from '../actions/shop';

import { firestore, mapCollectionsToFirebaseSnapShot, auth, googleProvider, createUserDoc, getCurrentUser } from '../../helpers/firebase';

// collecition sagas
export function* loadCollections() {
    try {
        const snapShot = yield firestore.collection('collections').get();
        const collections = yield call(mapCollectionsToFirebaseSnapShot, snapShot);
        yield put(collectionsLoadedSuccess(collections));
    } catch (err) {
        yield collectionsLoadedFailed(err.message);
    }
}

export function* collectionsLoading() {
    yield takeEvery(COLLECTIONS_LOADING, loadCollections)
}

// google signin sagas
export function* onGoogleSignIn() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        const userReference = yield call(createUserDoc, user);
        const userSnapshot = yield userReference.get();
        yield put(googleSignInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (err) {
        yield put(googleSignInFailure(err))
    }
}

export function* onSignInPassword({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userReference = yield call(createUserDoc, user);
        const userSnapshot = yield userReference.get();
        yield put(signInPasswordSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (err) {
        yield put(signInPasswordFailure(err))
    }
}

export function* onCheckUserSession() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userReference = yield call(createUserDoc, userAuth);
        const userSnapshot = yield userReference.get();
        yield put(signInPasswordSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch(err) {
        yield put(signInPasswordFailure(err))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, onGoogleSignIn);
}

export function* onSignUpPassword() {
    yield takeLatest(SIGNINPASSWORD_START, onSignInPassword);
}

export function* onCheckUserSessionStart() {
    yield takeLatest(CHECK_USER_SESSION, onCheckUserSession);
}

// root sagas
export function* rootSaga() {
    yield all([call(collectionsLoading), call(onGoogleSignInStart), call(onSignUpPassword), call(onCheckUserSessionStart)])
}