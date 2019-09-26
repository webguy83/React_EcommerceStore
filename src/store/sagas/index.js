import { takeEvery, takeLatest, call, put, all } from 'redux-saga/effects';
import { COLLECTIONS_LOADING, GOOGLE_SIGNIN_START, SIGNINPASSWORD_START } from '../actions/actionTypes';
import { googleSignInSuccess, googleSignInFailure } from '../actions/user';

import { collectionsLoadedSuccess, collectionsLoadedFailed } from '../actions/shop';

import { firestore, mapCollectionsToFirebaseSnapShot, auth, googleProvider, createUserDoc } from '../../helpers/firebase';

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

    // const unsubscribe = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserDoc(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     })
    //   }

    //   setCurrentUser(userAuth);
    //addCollectionAndDocuments("collections", collections.map(({ title, items }) => ({ title, items })));
}

export function* onGoogleSignInStart() {
    yield takeLatest(GOOGLE_SIGNIN_START, onGoogleSignIn)
}

// root sagas
export function* rootSaga() {
    yield all([call(collectionsLoading), call(onGoogleSignInStart)])
}