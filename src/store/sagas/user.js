import {put, takeLatest, all, call} from 'redux-saga/effects';
import {googleSignInSuccess, 
        googleSignInFailure, 
        signInPasswordSuccess, 
        signInPasswordFailure, 
        signOutSuccess, 
        signOutFailure} from '../actions/user';
import {GOOGLE_SIGNIN_START, SIGNOUT_START, SIGNINPASSWORD_START, CHECK_USER_SESSION} from '../actions/actionTypes';
import {createUserDoc, getCurrentUser, auth, googleProvider} from '../../helpers/firebase';


function* onGoogleSignIn() {
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

function* onSignInPassword({ payload: { email, password } }) {
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

function* onCheckUserSession() {
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

function* onSignOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, onGoogleSignIn);
}

function* onSignUpPassword() {
    yield takeLatest(SIGNINPASSWORD_START, onSignInPassword);
}

function* onCheckUserSessionStart() {
    yield takeLatest(CHECK_USER_SESSION, onCheckUserSession);
}

function* onSignOutStart() {
    yield takeLatest(SIGNOUT_START, onSignOut)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart),
                call(onSignUpPassword),
                call(onCheckUserSessionStart),
                call(onSignOutStart)
            ])
}