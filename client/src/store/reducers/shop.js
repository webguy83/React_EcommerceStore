import { COLLECTIONS_LOADING, COLLECTIONS_LOADED_SUCCESS, COLLECTIONS_LOADED_FAILED } from '../actions/actionTypes';

const initState = {
    collections: null,
    collectionsLoading: false,
    collectionsLoadingError: ""
}

export default (state = initState, action) => {
    switch (action.type) {
        case COLLECTIONS_LOADING:
            return {
                ...state,
                collectionsLoading: true
            }
        case COLLECTIONS_LOADED_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                collectionsLoading: false
            }
        case COLLECTIONS_LOADED_FAILED:
            return {
                ...state,
                collectionsLoading: false,
                collectionsLoadingError: action.payload
            }
        default:
            return state;
    }
}