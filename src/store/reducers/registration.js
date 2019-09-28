import { REGISTRATION_SUCCESS, REGISTRATION_FAILURE } from '../actions/actionTypes';

const initState = {
    error: ""
}

const registration = (state = initState, action) => {
    switch (action.type) {
        case REGISTRATION_SUCCESS:
            return {
                ...state,
                error: ""
            }
        case REGISTRATION_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default registration;