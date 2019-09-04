import { SET_CURRENT_USER } from '../actions/actionTypes';

const initState = {
    currentUser: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}