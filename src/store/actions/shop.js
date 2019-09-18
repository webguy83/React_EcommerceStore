import { UPDATE_COLLECTIONS } from './actionTypes';

export const updateCollections = (collections) => {
    return {
        type: UPDATE_COLLECTIONS,
        payload: collections
    }
}