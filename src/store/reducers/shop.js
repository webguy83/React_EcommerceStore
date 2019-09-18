import { UPDATE_COLLECTIONS } from '../actions/actionTypes';

const initState = {
    data: null
}

export default (state = initState, action) => {
    switch(action.type) {
        case UPDATE_COLLECTIONS: 
            return {
                ...state,
                data: action.payload
            }
        default: 
            return state;
    }
}