import { put, takeEvery, all, call } from 'redux-saga/effects';
import { COLLECTIONS_LOADING } from '../actions/actionTypes';
import { collectionsLoadedSuccess, collectionsLoadedFailed } from '../actions/shop';
import { firestore, mapCollectionsToFirebaseSnapShot } from '../../helpers/firebase'

function* loadCollections() {
    try {
        const snapShot = yield firestore.collection('collections').get();
        const collections = yield call(mapCollectionsToFirebaseSnapShot, snapShot);
        yield put(collectionsLoadedSuccess(collections));
    } catch (err) {
        yield collectionsLoadedFailed(err.message);
    }
}

function* collectionsLoading() {
    yield takeEvery(COLLECTIONS_LOADING, loadCollections)
}

export function* shopSagas() {
    yield all([call(collectionsLoading)])
}
