import { takeEvery, call, put } from 'redux-saga/effects';
import { COLLECTIONS_LOADING } from '../actions/actionTypes';

import { collectionsLoadedSuccess, collectionsLoadedFailed } from '../actions/shop';

import { firestore, mapCollectionsToFirebaseSnapShot } from '../../helpers/firebase';

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