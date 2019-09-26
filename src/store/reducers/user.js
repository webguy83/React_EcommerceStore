import {
    GOOGLE_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_FAILURE,
    SIGNINPASSWORD_SUCCESS,
    SIGNINPASSWORD_FAILURE
} from '../actions/actionTypes';

const initState = {
    currentUser: null,
    error: ""
}

export default (state = initState, action) => {
    switch (action.type) {
        case GOOGLE_SIGNIN_SUCCESS:
        case SIGNINPASSWORD_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                error: ""
            }
        case GOOGLE_SIGNIN_FAILURE:
        case SIGNINPASSWORD_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}