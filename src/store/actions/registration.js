import { REGISTRATION_START, REGISTRATION_SUCCESS, REGISTRATION_FAILURE } from './actionTypes';

export const registrationStart = (emailPasswordDisplayName) => {
    return {
        type: REGISTRATION_START,
        payload: emailPasswordDisplayName
    }
}

export const registrationSuccess = (emailPasswordDisplayName) => {
    return {
        type: REGISTRATION_SUCCESS,
        payload: emailPasswordDisplayName
    }
}

export const registrationFailure = (error) => {
    return {
        type: REGISTRATION_FAILURE,
        payload: error.message
    }
}