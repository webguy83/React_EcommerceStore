import { COLLECTIONS_LOADED_FAILED, COLLECTIONS_LOADED_SUCCESS, COLLECTIONS_LOADING } from './actionTypes';
import { firestore, mapCollectionsToFirebaseSnapShot } from '../../helpers/firebase';

export const collectionsLoading = () => {
    return {
        type: COLLECTIONS_LOADING
    }
}

export const collectionsLoadedSuccess = (collections) => {
    return {
        type: COLLECTIONS_LOADED_SUCCESS,
        payload: collections
    }
}

export const collectionsLoadedFailed = (errMsg) => {
    return {
        type: COLLECTIONS_LOADED_FAILED,
        payload: errMsg
    }
}

export const loadCollections = () => {
    return (dispatch) => {
        dispatch(collectionsLoading());

        const colRef = firestore.collection('collections');

        colRef.get().then(snapShot => {
            const collections = mapCollectionsToFirebaseSnapShot(snapShot);
            dispatch(collectionsLoadedSuccess(collections));
        })
        .catch(err => {
            dispatch(collectionsLoadedFailed(err.message));
        })
    }


}
